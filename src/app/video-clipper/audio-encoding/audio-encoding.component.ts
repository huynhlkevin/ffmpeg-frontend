import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AudioEncodingService } from '../../services/audio-encoding/audio-encoding.service';

@Component({
  selector: 'app-audio-encoding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './audio-encoding.component.html',
  styleUrl: './audio-encoding.component.scss'
})
export class AudioEncodingComponent {

  readonly codecs: string[];

  constructor(private readonly audioEncodingService: AudioEncodingService) {
    this.codecs = this.audioEncodingService.codecs;
  }

  onSelectedCodecChange(value: string): void {
    this.audioEncodingService.codec = value;
  }
}
