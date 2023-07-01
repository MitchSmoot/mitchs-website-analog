import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-caving-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './caving/caving-page.component.html',
  styleUrls: ['./caving/caving-page.component.scss'],
})
export default class CavingPageComponent {}
