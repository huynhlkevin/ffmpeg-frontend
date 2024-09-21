import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipComponent } from './clip.component';

describe('ClipComponent', () => {
  let component: ClipComponent;
  let fixture: ComponentFixture<ClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store source video file', () => {
    expect(typeof component.sourceVideoFile).toBe('string');
  });

  it('should be able to choose source video file', () => {
    expect(typeof component.sourceVideoFile).toBe('string');
  });

  it('should store start time', () => {
    expect(typeof component.startTime).toBe('string');
  });

  it('should store end time', () => {
    expect(typeof component.endTime).toBe('string');
  });

  it('should store its list index', () => {
    expect(typeof component.index).toBe('number');
  });
});
