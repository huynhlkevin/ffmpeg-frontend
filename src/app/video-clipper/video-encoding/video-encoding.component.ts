import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-video-encoding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './video-encoding.component.html',
  styleUrl: './video-encoding.component.scss'
})
export class VideoEncodingComponent {
  codec = 'libx264';
  availableCodecs = ['libx264'];

  quality = 18;
  minQuality = 0;
  maxQuality = 51;
}
