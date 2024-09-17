import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoClipperComponent } from "./video-clipper/video-clipper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoClipperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ffmpeg-frontend';
}
