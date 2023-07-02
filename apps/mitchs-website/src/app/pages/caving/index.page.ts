import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'caving-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div class="flex-container">
  <div class="flex-container sidebar" style="flex-direction: column;">
    <a routerLink="/caving/gear" routerLinkActive="active">Caving Gear</a>
    <a routerLink="/caving/gallery" routerLinkActive="active">Cave Gallery</a>
  </div>
</div>`,

})
export default class CavingHomePageComponent {}