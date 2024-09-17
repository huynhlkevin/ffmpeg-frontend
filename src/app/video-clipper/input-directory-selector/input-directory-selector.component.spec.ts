import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDirectorySelectorComponent } from './input-directory-selector.component';

describe('InputDirectorySelectorComponent', () => {
  let component: InputDirectorySelectorComponent;
  let fixture: ComponentFixture<InputDirectorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDirectorySelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDirectorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
