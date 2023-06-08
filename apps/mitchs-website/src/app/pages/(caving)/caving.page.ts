import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mitchs-caving-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './caving-page.component.html',
  styleUrls: ['./caving-page.component.scss'],
})
export default class CavingPageComponent {}
