import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaScrollerComponent } from "../../shared/media-scroller/media-scroller.component";
import GalleryService from './gallery/gallery.service';

@Component({
    selector: 'mitchs-caving-homepage',
    standalone: true,
    template: `
  <h2>Mitch's Caving Site</h2>
  <h4>Exploring the Unknown, Protecting the Known</h4>
  <article>
    <p>
      Welcome to my personal caving site! I am a caver based in the Western US, and I love exploring caves and learning about the underground world. I am also passionate about protecting caves and their unique environments.
    </p>

  </article>

  <section>
    <media-scroller [media]="galleryPreviewImages"/>
    <h4 routerLink="/caving/gallery" routerLinkActive="active">View my complete gallery</h4>
  </section>
  <section>
    <article>
      <h3>Caving Responsibly</h3>
      <p>
        Caving, while a fun and exciting activity, can be dangerous. It is important to come prepared with the right gear and knowledge. Caves are also very delicate, and must be protected for future generations. 
      </p>
      <a routerLink="/caving/gear" routerLinkActive="active">Lear more about caving gear</a>
    </article>
  </section>
  `,
    imports: [CommonModule, RouterModule, MediaScrollerComponent]
})
export default class CavingHomePageComponent {
  constructor(private galleryService: GalleryService) {}
  galleryPreviewImages = this.galleryService.get();
}
