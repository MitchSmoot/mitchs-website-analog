import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import GalleryService, { galleryImage } from "./gallery.service";
import GalleryImageComponent from "./gallery-image.component";
import GalleryImageDetailComponent from "./gallery-image-detail.component";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [RouterOutlet, GalleryImageComponent, GalleryImageDetailComponent],
  template: `
    <div id="gallery-container">
      @if (this.focusedImage()) {
        <mitchs-gallery-image-detail/>
      }
      <div class="flex-container">
        @for (image of images; track image) {
          <mitchs-gallery-image [image]="image"/>
        }
      </div>
    </div>
  `,
  styleUrls: ["./gallery.scss"]

})
export default class CaveGalleryPageComponent {
galleryService = inject(GalleryService)
images: galleryImage[] = this.galleryService.get();
focusedImage = this.galleryService.focusedImage;
}