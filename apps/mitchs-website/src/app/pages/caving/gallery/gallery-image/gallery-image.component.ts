import { Component, Input } from "@angular/core";
import GalleryService, { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
    <div id="gallery-image" (click)="onImageClick()" loading="lazy">
      <h2>{{this.image.title}}</h2>
      <img src="{{this.image.thumbnailUrl}}"/>
    </div>
  `,
  styles: [`
  #gallery-image {
    min-width: 400px;
    height: 400px;
    z-index: 1;
    background-size: cover;
    transition: transform 0.05s ease-in-out;
  }
  #gallery-image:hover {
    transform: scale(1.03);
  }
  h2 {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
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