import { Component } from '@angular/core';
import { ClipComponent } from './clip/clip.component';
import { Clip, ClipsService } from '../services/clips/clips.service';

@Component({
  selector: 'app-clips',
  standalone: true,
  imports: [ClipComponent],
  templateUrl: './clips.component.html',
  styleUrl: './clips.component.scss'
})
export class ClipsComponent {

  clips: Clip[];

  constructor(private readonly clipsService: ClipsService) {
    this.clips = clipsService.clips;
  }

  createClip(): void {
    this.clipsService.createClip();
  }

  deleteClip(index: number): void {
    const clip = this.clipsService.clips[index];
    this.clipsService.deleteClip(clip);
    this.clips = this.clipsService.clips;
  }
}
