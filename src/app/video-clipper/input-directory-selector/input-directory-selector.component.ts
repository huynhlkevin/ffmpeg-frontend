import { Component } from '@angular/core';
import { DirectoryDialogService } from '../../services/directory-dialog/directory-dialog.service';

@Component({
  selector: 'app-input-directory-selector',
  standalone: true,
  imports: [],
  templateUrl: './input-directory-selector.component.html',
  styleUrl: './input-directory-selector.component.scss'
})
export class InputDirectorySelectorComponent {
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
