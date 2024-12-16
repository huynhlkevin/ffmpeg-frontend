import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEncodingComponent } from './video-encoding.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';

describe('VideoEncodingComponent', () => {
  let component: VideoEncodingComponent;
  let fixture: ComponentFixture<VideoEncodingComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = new FormGroup({});
    await TestBed.configureTestingModule({
      imports: [VideoEncodingComponent],
      providers: [{ provide: FormGroupDirective, useValue: formGroupDirective }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store a list of codecs', () => {
    expect(Array.isArray(component.codecs)).toBeTrue();
    for (const codec of ['libx264']) {
      expect(component.codecs).toContain(codec);
    }
  });

  it('should store a list of presets', () => {
    expect(Array.isArray(component.presets)).toBeTrue();
    const presets = [
      'ultrafast',
      'superfast',
      'veryfast',
      'fast',
      'medium',
      'slow',
      'slower',
      'veryslow'
    ];
    for (const preset of presets) {
      expect(component.presets).toContain(preset);
    }
  });

  it('should have add codec to form and default to libx264', () => {
    expect(formGroupDirective.form.get('videoEncoding.codec')!.value).toBe('libx264');
  });

  it('should have add preset to form and default to medium', () => {
    expect(formGroupDirective.form.get('videoEncoding.preset')!.value).toBe('medium');
  });

  it('should have add quality to form and default to 23', () => {
    expect(formGroupDirective.form.get('videoEncoding.quality')!.value).toBe(23);
  });

  it('should have a minimum quality of 0', () => {
    expect(component.minQuality).toBe(0);
  });

  it('should have a maximum quality of 51', () => {
    expect(component.maxQuality).toBe(51);
  });
});
