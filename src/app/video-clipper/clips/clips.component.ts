import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, ControlContainer, FormArray, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FilesystemService } from '../../services/filesystem/filesystem.service';
import { v4 } from 'uuid';
import { TimeFormatterService } from '../../services/time-formatter/time-formatter.service';

@Component({
    selector: 'app-clips',
    imports: [ReactiveFormsModule],
    templateUrl: './clips.component.html',
    styleUrl: './clips.component.scss',
    viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ClipsComponent implements OnInit {

  private lastSelectedSourceVideoFile = '';

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly formBuilder: FormBuilder,
    private readonly filesystemService: FilesystemService,
    private readonly timeFormatterService: TimeFormatterService
  ) {

  }

  ngOnInit(): void {
    const clips = this.formBuilder.array([], { validators: [Validators.required] });
    this.formGroupDirective.form.addControl('clips', clips);
    this.onCreateClipClick();
  }

  onCreateClipClick(): void {
    const clip = this.formBuilder.group({
      id: [v4()],
      sourceVideoFile: [this.lastSelectedSourceVideoFile, [Validators.required], [this.sourceVideoFileValidator()]],
      startTime: ['0.0', [this.timeFormatValidator()]],
      endTime: ['1:00.0', [this.timeFormatValidator()]]
    }, { validator: [this.timeDifferenceValidator()] } as AbstractControlOptions);

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
    const filters = [
      {
        extensions,
        name: `Video Files (${extensions.map(extension => `*.${extension}`)})`
      }
    ];
    const inputDirectory = this.formGroupDirective.form.get('inputDirectory.path')!.value;
    const file = await this.filesystemService.showOpenFileDialog(filters, inputDirectory);
    if (file) {
      const sourceVideoFile = this.clips.get(`${index}.sourceVideoFile`) as FormControl;
      sourceVideoFile.setValue(file);
      this.lastSelectedSourceVideoFile = file;
    }
  }

  private sourceVideoFileValidator(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      const pathDoesNotExist = !(await this.filesystemService.exists(control.value));
      if (pathDoesNotExist) {
        return { pathDoesNotExist: control.value };
      }

      const isFile = await this.filesystemService.isFile(control.value);
      return isFile ? null : { isNotFile: control.value };
    }
  }

  private timeFormatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = this.timeFormatterService.validate(control.value);
      return valid ? null : { invalidTimeFormat: control.value };
    }
  }

  private timeDifferenceValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const startTime = group.get('startTime') as FormControl;
      const endTime = group.get('endTime') as FormControl;
      if (startTime.invalid || endTime.invalid) {
        return null;
      }

      const startTimeSeconds = this.timeFormatterService.convertToSeconds(startTime.value);
      const endTimeSeconds = this.timeFormatterService.convertToSeconds(endTime.value);
      return endTimeSeconds > startTimeSeconds ? null : { endTimeMustBeGreaterThanStartTime: [startTimeSeconds, endTimeSeconds] }
    }
  }
}
