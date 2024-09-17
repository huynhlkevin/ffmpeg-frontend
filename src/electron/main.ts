import { app, BrowserWindow } from 'electron';
import url from 'url';
import path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  if (app.isPackaged) {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './ffmpeg-frontend/browser/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  } else {
    mainWindow.loadURL('http://localhost:4200');
  }
}

app.whenReady().then(createWindow);

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
