import { Component } from "@angular/core";
import GalleryService from "./gallery.service";
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: "mitchs-gallery-image-detail",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <dialog open class="gallery-image-detail">
    <!-- <img [src]="currentImage()?.url"/> -->
    <!-- <img [ngSrc]="currentImage()?.url" priority width="300" height="300" /> -->
      @defer  {
        <img [ngSrc]="currentImage()?.url" priority width="300" height="300" />
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
  styleUrls: ["../gallery.scss"]
})
export default class GalleryImageDetailComponent {
  constructor(private galleryService: GalleryService) {}
  currentImage = this.galleryService.focusedImage;

  close() {
    this.galleryService.focusedImage.set(null);
  }
}