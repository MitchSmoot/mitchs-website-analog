import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<p>Cave Gallery</p>`,

})
export default class CaveGalleryComponent {}