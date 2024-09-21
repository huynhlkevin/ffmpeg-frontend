import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoEncodingService } from '../../services/video-encoding/video-encoding.service';

@Component({
  selector: 'app-video-encoding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './video-encoding.component.html',
  styleUrl: './video-encoding.component.scss'
})
export class VideoEncodingComponent {

  codecs: string[];
  minQuality: number;
  maxQuality: number;
  quality: number;

  constructor(private readonly videoEncodingService: VideoEncodingService) {
    this.codecs = this.videoEncodingService.codecs;
    this.minQuality = this.videoEncodingService.minQuality;
    this.maxQuality = this.videoEncodingService.maxQuality;
    this.quality = this.videoEncodingService.quality;
  }

  onSelectedCodecChange(value: string): void {
    this.videoEncodingService.codec = value;
  }

  onQualityChange(value: string): void {
    this.quality = Number(value);
    this.videoEncodingService.quality = Number(value);
  }
}
