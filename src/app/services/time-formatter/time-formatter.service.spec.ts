import { TestBed } from '@angular/core/testing';

import { TimeFormatterService } from './time-formatter.service';

describe('TimeFormatterService', () => {
  let service: TimeFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate milliseconds as true', () => {
    expect(service.validate('.123')).toBeTrue();
  });

  it('should validate seconds as true', () => {
    expect(service.validate('123')).toBeTrue();
  });

  it('should validate minutes as true', () => {
    expect(service.validate('1:23')).toBeTrue();
  });

  it('should validate hours as true', () => {
    expect(service.validate('1:2:3')).toBeTrue();
  });

  it('should validate days as false', () => {
    expect(service.validate('1:2:3:4')).toBeFalse();
  });

  it('should validate text as false', () => {
    expect(service.validate('test')).toBeFalse();
  });

  it('should convert milliseconds to seconds', () => {
    expect(service.convertToSeconds('.123')).toBe(0.123);
  });

  it('should convert seconds seconds to seconds', () => {
    expect(service.convertToSeconds('123')).toBe(123);
  });

  it('should convert minutes to seconds', () => {
    expect(service.convertToSeconds('1:23')).toBe(83);
  });

  it('should convert hours to seconds', () => {
    expect(service.convertToSeconds('1:2:3')).toBe(3723);
  });
});
