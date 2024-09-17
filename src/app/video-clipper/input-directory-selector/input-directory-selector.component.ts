import { Component } from '@angular/core';

@Component({
  selector: 'app-input-directory-selector',
  standalone: true,
  imports: [],
  templateUrl: './input-directory-selector.component.html',
  styleUrl: './input-directory-selector.component.scss'
})
export class InputDirectorySelectorComponent {
  async onChooseInputDirectory() {
    // @ts-ignore
    console.log(await window.electron.openDirectoryDialog());
  }
}
