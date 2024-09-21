import { Component } from '@angular/core';
import { InputDirectoryComponent } from "./input-directory/input-directory.component";
import { VideoEncodingComponent } from './video-encoding/video-encoding.component';
import { AudioEncodingComponent } from './audio-encoding/audio-encoding.component';
import { ClipsComponent } from '../clips/clips.component';

@Component({
  selector: 'app-video-clipper',
  standalone: true,
  imports: [InputDirectoryComponent, VideoEncodingComponent, AudioEncodingComponent, ClipsComponent],
  templateUrl: './video-clipper.component.html',
  styleUrl: './video-clipper.component.scss'
})
export class VideoClipperComponent {

}
