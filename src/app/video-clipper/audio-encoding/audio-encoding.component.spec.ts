import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioEncodingComponent } from './audio-encoding.component';

describe('AudioEncodingComponent', () => {
  let component: AudioEncodingComponent;
  let fixture: ComponentFixture<AudioEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioEncodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store the audio codec as a string', () => {
    expect(typeof component.codec).toBe('string');
  });

  it('should have a default audio codec of libopus', () => {
    expect(component.codec).toBe('libopus');
  });

  it('should store a list of available audio codecs', () => {
    expect(Array.isArray(component.availableCodecs)).toBeTrue();
    for (const codec of ['libopus', 'flac']) {
      expect(component.availableCodecs).toContain(codec);
    }
  });
});
