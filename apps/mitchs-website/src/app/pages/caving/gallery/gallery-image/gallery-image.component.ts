import { Component, Input } from "@angular/core";
import GalleryService, { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
    <div id="gallery-image" (click)="onImageClick()" style="background-image: url('{{this.image.url}}');">
      <h2>{{this.image.title}}</h2>
    </div>
  `,
  styles: [`
  #gallery-image {
    min-width: 400px;
    height: 400px;
    z-index: 1;
    background-size: cover;
    transition: transform 0.25s ease-in-out;
      &:hover {
    transform: scale(1.05);
  }
  }
  h2 {
    display: none;
  }
  `]
})
export default class GalleryImageComponent {
  @Input() image: galleryImage = {} as galleryImage;
  constructor(private galleryService: GalleryService) {}

  onImageClick() {
    console.log(this.image);
    this.galleryService.focusedImage.set(this.image);
  }

}