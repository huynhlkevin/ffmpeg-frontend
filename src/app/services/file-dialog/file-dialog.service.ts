import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDialogService {
  async showOpenDialog(filters: FileFilter[]): Promise<string> {
    // @ts-expect-error Accessing global variables
    return await window.electron.showOpenFileDialog([filters]);
  }
}

interface FileFilter {
  extensions: string[],
  name: string
}
