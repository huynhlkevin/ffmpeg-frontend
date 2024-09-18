import { TestBed } from '@angular/core/testing';

import { DirectoryDialogService } from './directory-dialog.service';

describe('DirectoryDialogService', () => {
  let service: DirectoryDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
