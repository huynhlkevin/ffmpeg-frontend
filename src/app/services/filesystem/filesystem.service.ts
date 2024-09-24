import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {

  async showOpenDirectoryDialog(): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.showOpenDirectoryDialog();
  }

  async showOpenFileDialog(filters: FileFilter[]): Promise<string> {
    // @ts-expect-error Electron global variables
    return await window.electron.showOpenFileDialog(filters);
  }

  async exists(path: string): Promise<boolean> {
    // @ts-expect-error Electron global variables
    return await window.electron.pathExists(path);
  }

  async isDirectory(path: string): Promise<boolean> {
    // @ts-expect-error Electron global variables
    return await window.electron.isDirectory(path);
  }
}

interface FileFilter {
  extensions: string[],
  name: string
}

