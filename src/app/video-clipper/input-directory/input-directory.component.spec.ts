import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDirectoryComponent } from './input-directory.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';

describe('InputDirectoryComponent', () => {
  let component: InputDirectoryComponent;
  let fixture: ComponentFixture<InputDirectoryComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = new FormGroup({});
    await TestBed.configureTestingModule({
      imports: [InputDirectoryComponent],
      providers: [{ provide: FormGroupDirective, useValue: formGroupDirective }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
