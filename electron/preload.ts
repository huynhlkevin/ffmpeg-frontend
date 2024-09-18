import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  showDirectoryDialog: () => ipcRenderer.invoke('showDirectoryDialog')
});
