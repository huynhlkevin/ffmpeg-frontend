import { TestBed } from '@angular/core/testing';

import { AudioEncodingService } from './audio-encoding.service';

describe('AudioEncodingService', () => {
  let service: AudioEncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioEncodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store codec', () => {
    expect(typeof service.codec).toBe('string');
  });

  it('should default codec to libopus', () => {
    expect(service.codec).toBe('libopus');
  });

  it('should store a list of codecs', () => {
    expect(Array.isArray(service.codecs)).toBeTrue();
    for (const codec of ['libopus', 'flac']) {
      expect(service.codecs).toContain(codec);
    }
  });
});
