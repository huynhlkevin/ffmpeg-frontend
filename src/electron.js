const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `../dist/ffmpeg-frontend/browser/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );
}

app.on('ready', createWindow);

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
