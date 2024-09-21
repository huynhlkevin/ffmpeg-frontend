/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  showDirectoryDialog: () => ipcRenderer.invoke('showDirectoryDialog'),
  showOpenFileDialog: (args: any[]) => ipcRenderer.invoke('showOpenFileDialog', args)
});
