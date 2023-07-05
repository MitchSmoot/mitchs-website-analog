import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './gallery.component.html',

})
export default class CaveGalleryPageComponent {}