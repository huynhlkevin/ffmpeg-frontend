import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeFormatterService {

  convertToSeconds(value: string): number {
    const isNotValid = !this.validate(value);
    if (isNotValid) {
      throw Error('Not a valid time string.')
    }

    const parts = value.split(':').reverse();
    let seconds = 0;
    for (let i = 0; i < parts.length; i++) {
      // this multiplier only works for 3 parts (hh:mm:ss.ms)
      const multiplier = 60 ** i;
      seconds += Number(parts[i]) * multiplier;
    }

    return seconds;
  }

  validate(value: string): boolean {
    const parts = value.split(':');
    if (parts.length > 3) {
      return false;
    }

    return parts.every(part => !Number.isNaN(Number(part)));
  }
}
