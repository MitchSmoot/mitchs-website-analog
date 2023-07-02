import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <H2>Cave Gallery</H2>
  <div class="flex-container">
    <div class="img-container">
      <img src="img/IMG_2001.jpg" alt=""/>
    </div> 
  </div>
  `,

})
export default class CaveGalleryComponent {}