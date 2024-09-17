import { Component } from '@angular/core';
import { InputDirectorySelectorComponent } from "./input-directory-selector/input-directory-selector.component";

@Component({
  selector: 'app-video-clipper',
  standalone: true,
  imports: [InputDirectorySelectorComponent],
  templateUrl: './video-clipper.component.html',
  styleUrl: './video-clipper.component.scss'
})
export class VideoClipperComponent {

}
