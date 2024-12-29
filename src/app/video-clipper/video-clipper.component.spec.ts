import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoClipperComponent } from './video-clipper.component';

describe('VideoClipperComponent', () => {
  let component: VideoClipperComponent;
  let fixture: ComponentFixture<VideoClipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoClipperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoClipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
