import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {

  async showOpenDirectoryDialog(): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.showOpenDirectoryDialog();
  }

  async showOpenFileDialog(filters: FileFilter[], defaultPath?: string): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.showOpenFileDialog(filters, defaultPath);
  }

  async showSaveFileDialog(filters: FileFilter[]): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.showSaveFileDialog(filters);
  }

  async exists(path: string): Promise<boolean> {
    // @ts-expect-error Electron global variables
    return await window.electron.pathExists(path);
  }

  async isDirectory(path: string): Promise<boolean> {
    // @ts-expect-error Electron global variables
    return await window.electron.isDirectory(path);
  }

  async isFile(path: string): Promise<boolean> {
    // @ts-expect-error Electron global variables
    return await window.electron.isFile(path);
  }

  async writeToFile(path: string, data: string): Promise<void> {
    // @ts-expect-error Electron global variables
    await window.electron.writeToFile(path, data);
  }

  async joinPath(...paths: string[]): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.joinPath(...paths);
  }
}

interface FileFilter {
  extensions: string[]
  name: string
}

