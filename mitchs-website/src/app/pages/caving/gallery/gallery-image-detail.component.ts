import { Component, inject } from "@angular/core";
import GalleryService from "./gallery.service";
import { CommonModule, NgOptimizedImage } from '@angular/common'

@Component({
  selector: "mitchs-gallery-image-detail",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <dialog open class="gallery-image-detail">
    <!-- <img [src]="currentImage()?.url"/> -->
    <!-- <img [ngSrc]="currentImage()?.url" priority width="300" height="300" /> -->
      @defer  {
        <img [src]="currentImage()?.url" priority width="300" height="300" />
      } @placeholder {
        <img [src]="currentImage()?.thumbnailUrl"/>
      }
      <div class="text-container">
        <h3>{{currentImage()?.title}}</h3>
        <p>{{currentImage()?.description}}</p>
        <button (click)="close()">Close</button>
      </div>
    </dialog>
  `,
  styleUrls: ["./gallery.scss"]
})
export default class GalleryImageDetailComponent {

  gallery = inject(GalleryService);
  currentImage = this.gallery.focusedImage;

  close() {
    this.gallery.focusedImage.set(null);
  }
}