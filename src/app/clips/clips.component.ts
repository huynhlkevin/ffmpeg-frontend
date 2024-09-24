import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FilesystemService } from '../services/filesystem/filesystem.service';

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
      sourceVideoFile: [''],
      startTime: [''],
      endTime: ['']
    });
    this.clips.push(clip);
    console.log(this.formGroupDirective.form.get('clips'));
  }

  onDeleteClipClick(index: number): void {
    console.log(this.clips);
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
}
