import { Component } from '@angular/core';
import { DirectoryDialogService } from '../../services/directory-dialog/directory-dialog.service';
import { InputDirectoryService } from '../../services/input-directory/input-directory.service';

@Component({
  selector: 'app-input-directory',
  standalone: true,
  imports: [],
  templateUrl: './input-directory.component.html',
  styleUrl: './input-directory.component.scss'
})
export class InputDirectoryComponent {

  inputDirectory: string;

  constructor(
    private readonly inputDirectoryService: InputDirectoryService,
    private readonly directoryDialogService: DirectoryDialogService
  ) {
    this.inputDirectory = this.inputDirectoryService.path;
  }

  async onSelectInputDirectoryClick(): Promise<void> {
    const directory = await this.directoryDialogService.showOpenDialog();
    if (directory) {
      this.inputDirectory = directory;
      this.inputDirectoryService.path = directory;
    }
  }
}
