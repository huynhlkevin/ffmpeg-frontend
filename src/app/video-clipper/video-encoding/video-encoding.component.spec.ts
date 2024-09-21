import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEncodingComponent } from './video-encoding.component';

describe('VideoEncodingComponent', () => {
  let component: VideoEncodingComponent;
  let fixture: ComponentFixture<VideoEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoEncodingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
