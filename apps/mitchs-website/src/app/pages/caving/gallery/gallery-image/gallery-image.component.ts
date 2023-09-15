import { Component, Input } from "@angular/core";
import GalleryService, { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
    <div (click)="onClick()" style="background-image: url('{{this.image.url}}');">
      <h2>{{this.image.title}}</h2>
    </div>
  `,
  styles: [`
  div {
    min-width: 400px;
    height: 400px;
    background-size: cover;
  }
  h2 {
    display: none;
  }
  `]
})
export default class GalleryImageComponent {
  @Input() image: galleryImage = {} as galleryImage;
  constructor(private galleryService: GalleryService) {}

  onClick() {
    console.log(this.image);
    this.galleryService.set(this.image)
  }
}