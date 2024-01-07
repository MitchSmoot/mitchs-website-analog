import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HideinProdDirective } from '../shared/hide-in-prod.directive';

@Component({
  selector: 'mitchs-caving-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HideinProdDirective],
  templateUrl: './caving-page.component.html',
  styleUrls: ['./caving/caving.scss'],
})
export default class CavingPageComponent {}