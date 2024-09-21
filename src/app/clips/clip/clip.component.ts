import { Component, Input, output } from '@angular/core';
import { FileDialogService } from '../../services/file-dialog/file-dialog.service';
import { Clip, ClipsService } from '../../services/clips/clips.service';

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.scss'
})
export class ClipComponent {

  @Input({ required: true })
  index = 0;

  sourceVideoFile: string;
  delete = output<ClipComponent>();

  constructor(
    private readonly clipsService: ClipsService,
    private readonly fileDialogService: FileDialogService
  ) {
    this.sourceVideoFile = this.getClip().sourceVideoFile;
  }

  async onSelectSourceVideoFileClick(): Promise<void> {
    const extensions = ['mp4', 'mkv']
    const file = await this.fileDialogService.showOpenDialog([
      {
        extensions,
        name: `Video Files (${extensions.map(extension => `*.${extension}`)})`
      }
    ]);
    if (file) {
      this.sourceVideoFile = file;
      this.getClip().sourceVideoFile = file;
    }
  }

  onStartTimeTextChange(value: string): void {
    this.getClip().startTime = value;
  }

  onEndTimeTextChange(value: string): void {
    this.getClip().endTime = value;
  }

  onDeleteClipClick(): void {
    this.delete.emit(this);
  }

  private getClip(): Clip {
    return this.clipsService.clips[this.index];
  }
}
