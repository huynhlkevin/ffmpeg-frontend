import { TestBed } from '@angular/core/testing';

import { VideoEncodingService } from './video-encoding.service';

describe('VideoEncodingService', () => {
  let service: VideoEncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoEncodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store codec', () => {
    expect(typeof service.codec).toBe('string');
  });

  it('should default codec to libx264', () => {
    expect(service.codec).toBe('libx264');
  });

  it('should store a list of codecs', () => {
    expect(Array.isArray(service.codecs)).toBeTrue();
    for (const codec of ['libx264']) {
      expect(service.codecs).toContain(codec);
    }
  });

  it('should store preset', () => {
    expect(typeof service.preset).toBe('string');
  });

  it('should default preset to medium', () => {
    expect(service.preset).toBe('medium');
  });

  it('should store a list of presets', () => {
    expect(Array.isArray(service.presets)).toBeTrue();
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
      expect(service.presets).toContain(preset);
    }
  });

  it('should store quality', () => {
    expect(typeof service.quality).toBe('number');
  });

  it('should default quality to 23', () => {
    expect(service.quality).toBe(23);
  });

  it('should have a minimum quality of 0', () => {
    expect(service.minQuality).toBe(0);
  });

  it('should throw an error is quality is set less than 0', () => {
    expect(() => service.quality = -1).toThrowError();
  });

  it('should have a maximum quality of 51', () => {
    expect(service.maxQuality).toBe(51);
  });

  it('should throw an error is quality is set greater than 51', () => {
    expect(() => service.quality = 52).toThrowError();
  });
});
