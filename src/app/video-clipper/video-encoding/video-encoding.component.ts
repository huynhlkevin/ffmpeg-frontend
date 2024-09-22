import { Component } from '@angular/core';
import { VideoEncodingService } from '../../services/video-encoding/video-encoding.service';

@Component({
  selector: 'app-video-encoding',
  standalone: true,
  imports: [],
  templateUrl: './video-encoding.component.html',
  styleUrl: './video-encoding.component.scss'
})
export class VideoEncodingComponent {

  codecs: string[];
  presets: string[];
  defaultPreset: string;
  minQuality: number;
  maxQuality: number;
  quality: number;

  constructor(private readonly videoEncodingService: VideoEncodingService) {
    this.codecs = this.videoEncodingService.codecs;
    this.presets = this.videoEncodingService.presets;
    this.defaultPreset = this.videoEncodingService.preset;
    this.minQuality = this.videoEncodingService.minQuality;
    this.maxQuality = this.videoEncodingService.maxQuality;
    this.quality = this.videoEncodingService.quality;
  }

  onSelectedCodecChange(value: string): void {
    this.videoEncodingService.codec = value;
  }

  onSelectedPresetChange(value: string): void {
    this.videoEncodingService.preset = value;
  }

  onQualityChange(value: string): void {
    this.quality = Number(value);
    this.videoEncodingService.quality = Number(value);
  }
}
