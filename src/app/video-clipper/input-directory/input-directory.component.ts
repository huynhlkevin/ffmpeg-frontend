import { Component } from '@angular/core';
import { DirectoryDialogService } from '../../services/directory-dialog/directory-dialog.service';

@Component({
  selector: 'app-input-directory',
  standalone: true,
  imports: [],
  templateUrl: './input-directory.component.html',
  styleUrl: './input-directory.component.scss'
})
export class InputDirectoryComponent {
  inputDirectory = '';

  constructor(private readonly directoryDialogService: DirectoryDialogService) {
  }

  async onChooseInputDirectory() {
    const directory = await this.directoryDialogService.showOpenDialog();
    if (directory) {
      this.inputDirectory = directory;
    }
  }
}
