import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoEncodingService {

  private _codec = 'libx264';
  get codec(): string { return this._codec; }
  set codec(value: string) { this._codec = value; }

  private _codecs = ['libx264', 'test'];
  get codecs(): string[] { return this._codecs; }

  private _quality = 18;
  get quality(): number { return this._quality; }
  set quality(value: number) {
    if (value < 0 || value > 51) {
      throw RangeError('Video encoding quality must be between 0 - 51');
    }

    this._quality = value;
  }

  private _minQuality = 0;
  get minQuality(): number { return this._minQuality; }

  private _maxQuality = 51;
  get maxQuality(): number { return this._maxQuality; }
}
