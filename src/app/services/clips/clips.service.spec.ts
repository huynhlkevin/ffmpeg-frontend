import { TestBed } from '@angular/core/testing';

import { ClipsService } from './clips.service';

describe('ClipsService', () => {
  let service: ClipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store a list of clips', () => {
    expect(Array.isArray(service.clips)).toBeTrue();
  });

  it('should be able to create a clip', () => {
    expect(service.clips.length).toBe(0);
    service.createClip();
    expect(service.clips.length).toBe(1);
  });

  it('should be able to delete a clip', () => {
    service.createClip();
    expect(service.clips.length).toBe(1);
    service.deleteClip(service.clips[0]);
    expect(service.clips.length).toBe(0);
  });
});
