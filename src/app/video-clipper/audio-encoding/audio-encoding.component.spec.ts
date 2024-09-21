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
});
