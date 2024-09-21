import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {

  private _clips: Clip[] = [];
  get clips(): Clip[] { return this._clips; }

  createClip(): void {
    this.clips.push({
      sourceVideoFile: '',
      startTime: '',
      endTime: ''
    });
  }

  deleteClip(clip: Clip): void {
    this._clips = this.clips.filter(_clip => _clip !== clip);
  }
}

export interface Clip {
  sourceVideoFile: string
  startTime: string
  endTime: string
}
