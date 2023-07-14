import { Component, Input } from "@angular/core";
import { galleryImage } from "../gallery.service";

@Component({
  selector: "mitchs-gallery-image",
  standalone: true,
  template: `
  <div style="width: 400px">
    <h2>{{this.image.title}}</h2>
    <img src="{{this.image.url}}" alt="{{this.image.title}}" />
  </div>
    `,
})
export default class GalleryImageComponent {
  @Input() image: galleryImage;
}