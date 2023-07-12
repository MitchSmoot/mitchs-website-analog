import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import GalleryService, { galleryImage } from "./gallery.service";
import GalleryImageComponent from "./gallery-image/gallery-image.component";

@Component({
  selector: 'cave-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalleryImageComponent],
  templateUrl: './gallery.component.html',

})
export default class CaveGalleryPageComponent {
constructor(private galleryService: GalleryService) {}
images: galleryImage[] = this.galleryService.get();

}