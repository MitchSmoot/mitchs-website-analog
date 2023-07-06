import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-caving-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <h2>Caving Home</h2>
  `
})
export default class CavingHomePageComponent {}
