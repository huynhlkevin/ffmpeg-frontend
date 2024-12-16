import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FilesystemService } from '../../services/filesystem/filesystem.service';

@Component({
  selector: 'app-input-directory',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-directory.component.html',
  styleUrl: './input-directory.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class InputDirectoryComponent implements OnInit {

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly formBuilder: FormBuilder,
    private readonly filesystemService: FilesystemService
  ) {

  }

  ngOnInit(): void {
    const inputDirectory = this.formBuilder.group({
      path: ['', [], [this.pathValidator()]]
    });
    this.formGroupDirective.form.addControl('inputDirectory', inputDirectory);
  }

  async onSelectInputDirectoryClick(): Promise<void> {
    const directory = await this.filesystemService.showOpenDirectoryDialog();
    if (directory) {
      this.path.setValue(directory);
    }
  }

  get path(): FormControl {
    return this.formGroupDirective.form.get('inputDirectory.path') as FormControl;
  }

  private pathValidator(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      if (!control.value) {
        return null;
      }

      const pathDoesNotExist = !(await this.filesystemService.exists(control.value));
      if (pathDoesNotExist) {
        return { pathDoesNotExist: control.value };
      }

      const isDirectory = await this.filesystemService.isDirectory(control.value);
      return isDirectory ? null : { isNotDirectory: control.value };
    }
  }
}
