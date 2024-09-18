import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectoryDialogService {
  async showOpenDialog(): Promise<string> {
    // @ts-expect-error Accessing global variables
    return await window.electron.showDirectoryDialog();
  }
}
