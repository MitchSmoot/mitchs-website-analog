import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaScrollerComponent } from "../../shared/media-scroller/media-scroller.component";
import GalleryService from './gallery/gallery.service';
import { NgtCanvas, extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
    selector: 'mitchs-caving-homepage',
    standalone: true,
    template: `
  <section class="entry-section">
    <h1>Caving</h1>
    <h3>Exploring the Unknown, Protecting the Known</h3>
    <article>
      <p>
        Welcome to my personal caving site! I am a caver based in the Western US, and I love exploring caves and learning about the underground world. I am also passionate about protecting caves and their unique environments.
      </p>
  
    </article>
  </section>

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
  <section id="three-canvas">
    <ngt-canvas [sceneGraph]="SceneGraph" />
  </section>
  `,
    imports: [CommonModule, RouterModule, MediaScrollerComponent, NgtCanvas]
})
export default class CavingHomePageComponent {
  constructor(private galleryService: GalleryService) {}
  galleryPreviewImages = this.galleryService.get();
  readonly SceneGraph = SceneGraph;
}
