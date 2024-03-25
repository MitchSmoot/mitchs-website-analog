import { Component, Input, inject } from "@angular/core";
import GalleryService, { galleryImage } from "./gallery.service";
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div id="gallery-image" (click)="onImageClick()" loading="lazy">
      <h2>{{this.image.title}}</h2>
      <img ngSrc="{{this.image.thumbnailUrl}}" fill priority/>
      <!-- <img src="{{this.image.thumbnailUrl}}"/> -->
    </div>
  `,
  styleUrls: ["./gallery.scss"]
})
export default class GalleryImageComponent {
  @Input() image: galleryImage = {} as galleryImage;
  galleryService = inject(GalleryService)
  onImageClick() {
    this.galleryService.focusedImage.set(this.image);
  }

}