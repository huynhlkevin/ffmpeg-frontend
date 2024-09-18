import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio-encoding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './audio-encoding.component.html',
  styleUrl: './audio-encoding.component.scss'
})
export class AudioEncodingComponent {
  codec = 'libopus';
  availableCodecs = ['libopus', 'flac'];
}
