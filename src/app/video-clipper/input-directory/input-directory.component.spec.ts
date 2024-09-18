import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDirectoryComponent } from './input-directory.component';

describe('InputDirectoryComponent', () => {
  let component: InputDirectoryComponent;
  let fixture: ComponentFixture<InputDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDirectoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store the input directory as a string', () => {
    expect(typeof component.inputDirectory).toBe('string');
  });

  it('should have a function to edit the input directory property', async () => {
    const directoryDialogServiceFake = { showOpenDialog: async () => 'test' };
    component = new InputDirectoryComponent(directoryDialogServiceFake);
    await component.onChooseInputDirectory()
    expect(component.inputDirectory).toBe('test')
  });
});
