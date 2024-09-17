import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  openDirectoryDialog: () => ipcRenderer.invoke('openDirectoryDialog')
});
