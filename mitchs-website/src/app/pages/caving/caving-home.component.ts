import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import MediaScrollerComponent from '../../shared/media-scroller/media-scroller.component';
import GalleryService from './gallery/gallery.service';


@Component({
    selector: 'mitchs-caving-homepage',
    standalone: true,
    templateUrl: './caving-home.component.html',
    imports: [CommonModule, RouterModule, MediaScrollerComponent],
    styleUrls: ['./caving.scss']
})
export default class CavingHomePageComponent {
  constructor(private galleryService: GalleryService) {}
  galleryPreviewImages = this.galleryService.get();
}
