import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  if (app.isPackaged) {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  } else {
    mainWindow.loadURL('http://localhost:4200');
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  ipcMain.handle('showOpenDirectoryDialog', async () => {
    const result = await dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] });
    return result.filePaths[0];
  });

  ipcMain.handle('showOpenFileDialog', async (event: Electron.IpcMainInvokeEvent, filters: any[], defaultPath?: string) => {
    const result = await dialog.showOpenDialog(mainWindow, { properties: ['openFile'], filters, defaultPath });
    return result.filePaths[0];
  });

  ipcMain.handle('showSaveFileDialog', async (event: Electron.IpcMainInvokeEvent, filters: any[]) => {
    const result = await dialog.showSaveDialog(mainWindow, { properties: ['showOverwriteConfirmation'], filters });
    return result.filePath;
  });

  ipcMain.handle('pathExists', async (event: Electron.IpcMainInvokeEvent, path: string) => {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  });

  ipcMain.handle('isDirectory', async (event: Electron.IpcMainInvokeEvent, path: string) => {
    const stat = await fs.stat(path);
    return stat.isDirectory();
  });

  ipcMain.handle('isFile', async (event: Electron.IpcMainInvokeEvent, path: string) => {
    const stat = await fs.stat(path);
    return stat.isFile();
  });

  ipcMain.handle('writeToFile', async (event: Electron.IpcMainInvokeEvent, path: string, data: string) => {
    await fs.writeFile(path, data);
  });

  ipcMain.handle('joinPath', async (event: Electron.IpcMainInvokeEvent, ...paths: string[]) => {
    return path.join(...paths);
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
