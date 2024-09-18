import { Component } from '@angular/core';
import { InputDirectoryComponent } from "./input-directory/input-directory.component";
import { VideoEncodingComponent } from './video-encoding/video-encoding.component';

@Component({
  selector: 'app-video-clipper',
  standalone: true,
  imports: [InputDirectoryComponent, VideoEncodingComponent],
  templateUrl: './video-clipper.component.html',
  styleUrl: './video-clipper.component.scss'
})
export class VideoClipperComponent {

}
