import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HideinProdDirective } from '../shared/hide-in-prod.directive';

@Component({
  selector: 'mitchs-caving-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HideinProdDirective],
  template: `
  <div class="cave-nav">
    <a routerLink="/caving" routerLinkActive="active"><b>Caving Home</b></a>
    <a HideInProd routerLink="/caving/gear" routerLinkActive="active">Gear</a>
    <a routerLink="/caving/gallery" routerLinkActive="active">Gallery</a>
    <a HideInProd routerLink="/caving/cave-repair" routerLinkActive="active">Cave Formation Repair</a>
  </div>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./caving/caving.scss'],
})
export default class CavingPageComponent {}