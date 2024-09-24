import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-encoding',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './video-encoding.component.html',
  styleUrl: './video-encoding.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class VideoEncodingComponent implements OnInit, AfterViewInit  {

  codecs = ['libx264'];

  presets = [
    'ultrafast',
    'superfast',
    'veryfast',
    'fast',
    'medium',
    'slow',
    'slower',
    'veryslow'
  ]

  minQuality = 0;
  maxQuality = 51;

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    const videoEncoding = this.formBuilder.group({
      codec: [''],
      preset: [''],
      quality: [23]
    });
    this.formGroupDirective.form.addControl('videoEncoding', videoEncoding);
  }

  ngAfterViewInit(): void {
    const codec = this.formGroupDirective.form.get('videoEncoding.codec');
    codec!.setValue('libx264');

    const preset = this.formGroupDirective.form.get('videoEncoding.preset');
    preset!.setValue('medium');
  }

  get quality(): FormControl {
    return this.formGroupDirective.form.get('videoEncoding.quality') as FormControl;
  }
}
