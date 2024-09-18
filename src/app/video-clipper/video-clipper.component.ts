import { Component } from '@angular/core';
import { InputDirectoryComponent } from "./input-directory/input-directory.component";

@Component({
  selector: 'app-video-clipper',
  standalone: true,
  imports: [InputDirectoryComponent],
  templateUrl: './video-clipper.component.html',
  styleUrl: './video-clipper.component.scss'
})
export class VideoClipperComponent {

}
