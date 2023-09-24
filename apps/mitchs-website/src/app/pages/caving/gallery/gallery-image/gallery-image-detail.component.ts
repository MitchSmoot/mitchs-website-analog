import { Component } from "@angular/core";
import GalleryService from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image-detail",
  standalone: true,
  template: `
    <dialog open>
      <h3>{{currentImage()?.title}}</h3>
      <div class="flex-container">
        <img [src]="currentImage()?.url" />
        <p>{{currentImage()?.description}}</p>
      </div>
      <button (click)="close()">Close</button>
    </dialog>
  `,
  styles: [`
    dialog {
      z-index: 2;
    }
  `]
})
export default class GalleryImageDetailComponent {
  constructor(private galleryService: GalleryService) {}
  currentImage = this.galleryService.focusedImage;

  close() {
    this.galleryService.focusedImage.set(null);
    console.log("close")
  }
}