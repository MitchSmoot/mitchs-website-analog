import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './(home)/home.component.html',
  styleUrls: ['./(home)/home.component.scss'],
})
export default class HomePageComponent {}
