import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  showOpenDirectoryDialog: () => ipcRenderer.invoke('showOpenDirectoryDialog'),
  showOpenFileDialog: (filters: any[], defaultPath?: string) => ipcRenderer.invoke('showOpenFileDialog', filters, defaultPath),
  pathExists: (path: string) => ipcRenderer.invoke('pathExists', path),
  isDirectory: (path: string) => ipcRenderer.invoke('isDirectory', path),
  isFile: (path: string) => ipcRenderer.invoke('isFile', path)
});
