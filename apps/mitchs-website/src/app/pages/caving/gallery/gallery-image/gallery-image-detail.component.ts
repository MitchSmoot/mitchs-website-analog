import { Component } from "@angular/core";
import GalleryService from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image-detail",
  standalone: true,
  template: `
    <dialog open class="gallery-image-detail">
      <h3>{{currentImage()?.title}}</h3>
      <div class="flex-container">
        <img [src]="currentImage()?.url" />
        <div class="text-container">
          <p>{{currentImage()?.description}}</p>
          <button (click)="close()">Close</button>
        </div>
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
    console.log("close")
  }
}