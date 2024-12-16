import { Component } from '@angular/core';
import { InputDirectoryComponent } from "./input-directory/input-directory.component";
import { VideoEncodingComponent } from './video-encoding/video-encoding.component';
import { AudioEncodingComponent } from './audio-encoding/audio-encoding.component';
import { ClipsComponent } from './clips/clips.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VideoClipperService } from '../services/video-clipper/video-clipper.service';
import { TimeFormatterService } from '../services/time-formatter/time-formatter.service';
import { FilesystemService } from '../services/filesystem/filesystem.service';

@Component({
    selector: 'app-video-clipper',
    imports: [
        ReactiveFormsModule,
        InputDirectoryComponent,
        VideoEncodingComponent,
        AudioEncodingComponent,
        ClipsComponent
    ],
    templateUrl: './video-clipper.component.html',
    styleUrl: './video-clipper.component.scss'
})
export class VideoClipperComponent {

  videoClipperForm: FormGroup;

  constructor(
    private readonly videoClipperService: VideoClipperService,
    private readonly timeFormatterService: TimeFormatterService,
    private readonly filesystemService: FilesystemService,
    formBuilder: FormBuilder
  ) {
    this.videoClipperForm = formBuilder.group({});
  }

  async onSubmit(): Promise<void> {
    const file = await this.filesystemService.showSaveFileDialog([{ extensions: ['bat'], name: 'Batch file' }])
    if (!file) {
      return;
    }

    this.videoClipperService.clip({
      audioEncoding: this.getAudioEncoding(),
      videoEncoding: this.getVideoEncoding(),
      clips: this.getClips(),
      outputFile: file
    })
  }

  private getAudioEncoding() {
    return {
      codec: this.videoClipperForm.get('audioEncoding.codec')!.value
    }
  }

  private getVideoEncoding() {
    return {
      codec: this.videoClipperForm.get('videoEncoding.codec')!.value,
      preset: this.videoClipperForm.get('videoEncoding.preset')!.value,
      quality: this.videoClipperForm.get('videoEncoding.quality')!.value
    }
  }

  private getClips() {
    const clips = this.videoClipperForm.get('clips') as FormArray;
    return clips.controls.map(clip => {
      const startTime = this.timeFormatterService.convertToSeconds(clip.get('startTime')!.value);
      const endTime = this.timeFormatterService.convertToSeconds(clip.get('endTime')!.value);
      return {
        sourceVideoFile: clip.get('sourceVideoFile')!.value,
        startTime: clip.get('startTime')!.value,
        duration: endTime - startTime
      }
    })
  }
}
