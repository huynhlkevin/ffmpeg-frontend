import { Injectable } from '@angular/core';
import { FilesystemService } from '../filesystem/filesystem.service';

@Injectable({
  providedIn: 'root'
})
export class VideoClipperService {

  constructor(private readonly filesystemService: FilesystemService) {

  }

  async clip(data: VideoClipperData): Promise<void> {
    const ffmpegCommandBatch: string[] = [];
    const dirName = await this.filesystemService.getDirName(data.outputFile);
    const clipPrefix = await this.filesystemService.joinPath(dirName, 'Clip')
    for (const clip of data.clips) {
      const ffmpegCommand = [
        'ffmpeg',
        this.convertClip(clip),
        this.convertVideoEncoding(data.videoEncoding),
        this.convertAudioEncoding(data.audioEncoding),
        `"${clipPrefix}${data.clips.indexOf(clip).toString().padStart(3, '0')}.mkv"`
      ].join(' ')
      ffmpegCommandBatch.push(ffmpegCommand);
    }

    this.filesystemService.writeToFile(data.outputFile, ffmpegCommandBatch.join('\n'));
  }

  private convertClip(clip: Clip): string {
    return `-ss ${clip.startTime} -i "${clip.sourceVideoFile}" -t ${clip.duration}`;
  }

  private convertAudioEncoding(audioEncoding: AudioEncoding): string {
    return `-c:a ${audioEncoding.codec}`;
  }

  private convertVideoEncoding(videoEncoding: VideoEncoding): string {
    return `-c:v ${videoEncoding.codec} -preset ${videoEncoding.preset} -crf ${videoEncoding.quality}`;
  }
}

interface VideoClipperData {
  audioEncoding: AudioEncoding
  videoEncoding: VideoEncoding
  clips: Clip[]
  outputFile: string
}

interface AudioEncoding {
  codec: string
}

interface VideoEncoding {
  codec: string
  preset: string
  quality: number
}

interface Clip {
  sourceVideoFile: string
  startTime: number
  duration: number
}
