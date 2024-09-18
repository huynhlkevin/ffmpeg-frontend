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

  it('should have a property to store the input directory', () => {
    expect(Object.keys(component)).toContain('inputDirectory')
  });

  it('should have a function to edit the input directory property', async () => {
    const directoryDialogServiceFake = { showOpenDialog: async () => 'test' };
    component = new InputDirectorySelectorComponent(directoryDialogServiceFake);
    await component.onChooseInputDirectory()
    expect(component.inputDirectory).toEqual('test')
  });
});
