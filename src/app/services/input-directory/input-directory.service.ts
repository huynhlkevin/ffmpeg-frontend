import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDirectoryService {

  private _path = '';
  get path(): string { return this._path; }
  set path(value: string) { this._path = value; }
}
