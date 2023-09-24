import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import GalleryService, { galleryImage } from "./gallery.service";
import GalleryImageComponent from "./gallery-image/gallery-image.component";
import GalleryImageDetailComponent from "./gallery-image/gallery-image-detail.component";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalleryImageComponent, GalleryImageDetailComponent],
  template: `
    <div id="gallery-container">
      <mitchs-gallery-image-detail *ngIf="this.focusedImage()"/>
      <H2>Cave Gallery</H2>
      <div class="flex-container">
        <mitchs-gallery-image *ngFor="let image of images" [image]="image"/>
      </div>
    </div>
  `,
  styles: [`
    mitchs-gallery-image {
      width: 25em;
      margin: 0px;
      padding: 0px;
    }
    #gallery-container {
      margin: 0rem 1rem;
    }
  `]

})
export default class CaveGalleryPageComponent {
constructor(private galleryService: GalleryService) {}
images: galleryImage[] = this.galleryService.get();
focusedImage = this.galleryService.focusedImage;
}