import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio-encoding',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './audio-encoding.component.html',
  styleUrl: './audio-encoding.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class AudioEncodingComponent implements OnInit, AfterViewInit {

  readonly codecs = ['libopus', 'flac'];

  constructor(
    private readonly formGroupDirective: FormGroupDirective,
    private readonly formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    const audioEncoding = this.formBuilder.group({
      codec: ['']
    });
    this.formGroupDirective.form.addControl('audioEncoding', audioEncoding);
  }

  ngAfterViewInit(): void {
    const codec = this.formGroupDirective.form.get('audioEncoding.codec');
    codec!.setValue('libopus');
  }
}
