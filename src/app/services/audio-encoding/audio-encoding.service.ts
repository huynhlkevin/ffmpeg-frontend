import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioEncodingService {

  private _codec = 'libopus';
  get codec(): string { return this._codec; }
  set codec(value: string) { this._codec = value; }

  private _codecs = ['libopus', 'flac'];
  get codecs(): string[] { return this._codecs; }
}
