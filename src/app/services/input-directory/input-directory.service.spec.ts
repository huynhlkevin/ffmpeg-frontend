import { TestBed } from '@angular/core/testing';

import { InputDirectoryService } from './input-directory.service';

describe('InputDirectoryService', () => {
  let service: InputDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store input directory', () => {
    expect(typeof service.path).toBe('string');
  });
});
