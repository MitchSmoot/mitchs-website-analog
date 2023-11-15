import { Component, Input } from "@angular/core";
import GalleryService, { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
    <div id="gallery-image" (click)="onImageClick()" loading="lazy">
      <h2>{{this.image.title}}</h2>
      <img class="img-tile" src="{{this.image.thumbnailUrl}}"/>
    </div>
  `,
  styleUrls: ["../gallery.scss"]
})
export default class GalleryImageComponent {
  @Input() image: galleryImage = {} as galleryImage;
  constructor(private galleryService: GalleryService) {}

  onImageClick() {
    console.log(this.image);
    this.galleryService.focusedImage.set(this.image);
  }

}