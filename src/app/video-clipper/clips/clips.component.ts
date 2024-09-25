import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ControlContainer, FormArray, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FilesystemService } from '../../services/filesystem/filesystem.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-clips',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './clips.component.html',
  styleUrl: './clips.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ClipsComponent implements OnInit {

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly formBuilder: FormBuilder,
    private readonly filesystemService: FilesystemService
  ) {

  }

  ngOnInit(): void {
    const clips = this.formBuilder.array([]);
    this.formGroupDirective.form.addControl('clips', clips);
  }

  onCreateClipClick(): void {
    const clip = this.formBuilder.group({
      id: [v4()],
      sourceVideoFile: this.formBuilder.control('', { asyncValidators: [this.filePathValidator()], updateOn: 'blur' }),
      startTime: [''],
      endTime: ['']
    });
    this.clips.push(clip);
  }

  onDeleteClipClick(index: number): void {
    this.clips.removeAt(index);
  }

  get clips(): FormArray {
    return this.formGroupDirective.form.get('clips') as FormArray;
  }

  async onSelectSourceVideoFileClick(index: number): Promise<void> {
    const extensions = ['mp4', 'mkv']
    const file = await this.filesystemService.showOpenFileDialog([
      {
        extensions,
        name: `Video Files (${extensions.map(extension => `*.${extension}`)})`
      }
    ]);
    if (file) {
      const sourceVideoFile = this.clips.get(`${index}.sourceVideoFile`) as FormControl;
      sourceVideoFile.setValue(file);
    }
  }

  private filePathValidator(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      const pathExists = await this.filesystemService.exists(control.value);
      if (!pathExists) {
        return { pathDoesNotExist: control.value };
      }

      const isFile = await this.filesystemService.isFile(control.value);
      return isFile ? null : { isNotFile: control.value };
    }
  }
}
