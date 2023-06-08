import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mitchs-radio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.scss'],
})
export default class RadioPageComponent {}
