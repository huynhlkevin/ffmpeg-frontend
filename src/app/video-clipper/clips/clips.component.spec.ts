import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipsComponent } from './clips.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';

describe('ClipsComponent', () => {
  let component: ClipsComponent;
  let fixture: ComponentFixture<ClipsComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = new FormGroup({});
    await TestBed.configureTestingModule({
      imports: [ClipsComponent],
      providers: [{ provide: FormGroupDirective, useValue: formGroupDirective }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have add codec to form', () => {
    expect(formGroupDirective.form.get('clips')).toBeTruthy();
  });
});
