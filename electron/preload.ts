/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  showOpenDirectoryDialog: () => ipcRenderer.invoke('showOpenDirectoryDialog'),
  showOpenFileDialog: (args: any[]) => ipcRenderer.invoke('showOpenFileDialog', args)
});
