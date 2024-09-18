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

  it('should store the video codec as a string', () => {
    expect(typeof component.codec).toBe('string');
  });

  it('should have a default video codec of libx264', () => {
    expect(component.codec).toBe('libx264');
  });

  it('should store a list of available video codecs', () => {
    expect(Array.isArray(component.availableCodecs)).toBeTrue();
    expect(component.availableCodecs).toContain('libx264');
  });

  it('should store the video quality as a number', () => {
    expect(typeof component.quality).toBe('number');
  });

  it('should have a default quality of 18', () => {
    expect(component.quality).toBe(18);
  });

  it('should have a min quality of 0', () => {
    expect(component.minQuality).toBe(0);
  });

  it('should have a max quality of 51', () => {
    expect(component.maxQuality).toBe(51);
  });
});
