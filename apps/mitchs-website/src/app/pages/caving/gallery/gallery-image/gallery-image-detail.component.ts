import { Component } from "@angular/core";
import GalleryService from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image-detail",
  standalone: true,
  template: `
    <dialog open>Gallery Image in Detail
      <button (click)="close()">Close</button>
    </dialog>
  `,
  styles: [`
  
  `]
})
export default class GalleryImageDetailComponent {
  constructor(private galleryService: GalleryService) {}

  close() {
    this.galleryService.focusedImage.set(null);
    console.log("close")
  }
}