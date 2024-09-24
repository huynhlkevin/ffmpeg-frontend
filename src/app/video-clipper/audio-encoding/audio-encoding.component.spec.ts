import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioEncodingComponent } from './audio-encoding.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';

describe('AudioEncodingComponent', () => {
  let component: AudioEncodingComponent;
  let fixture: ComponentFixture<AudioEncodingComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = new FormGroup({});
    await TestBed.configureTestingModule({
      imports: [AudioEncodingComponent],
      providers: [{ provide: FormGroupDirective, useValue: formGroupDirective }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of codecs', () => {
    expect(Array.isArray(component.codecs)).toBeTrue();
    for (const codec of ['libopus', 'flac']) {
      expect(component.codecs).toContain(codec);
    }
  });

  it('should have add codec to form and default to libopus', () => {
    expect(formGroupDirective.form.get('audioEncoding.codec')!.value).toBe('libopus');
  });
});
