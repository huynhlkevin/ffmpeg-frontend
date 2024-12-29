import { TestBed } from '@angular/core/testing';

import { VideoClipperService } from './video-clipper.service';

describe('VideoClipperService', () => {
  let service: VideoClipperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoClipperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
