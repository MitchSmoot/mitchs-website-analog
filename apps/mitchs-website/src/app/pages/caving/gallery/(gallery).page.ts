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
      @if (this.focusedImage()) {
        <mitchs-gallery-image-detail/>
      }
      <div class="flex-container">
        @for (image of images; track image.title) {
          <mitchs-gallery-image [image]="image"/>
        }
      </div>
    </div>
  `,
  styleUrls: ["./gallery.scss"]

})
export default class CaveGalleryPageComponent {
constructor(private galleryService: GalleryService) {}
images: galleryImage[] = this.galleryService.get();
focusedImage = this.galleryService.focusedImage;
}