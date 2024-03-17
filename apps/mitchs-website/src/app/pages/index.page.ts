import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThreeCanvasComponent } from '../shared/three/threejs.component';

@Component({
  selector: 'mitchs-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ThreeCanvasComponent],
  templateUrl: './(home)/home.component.html',
  styleUrls: ['./(home)/home.component.scss'],
})
export default class HomePageComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  currentYear = new Date().getFullYear();
  ngOnInit() {
    // this.getHello();
  }

  // async getHello() {
  // let hello: any = "blah"
  // hello = await this.apiService.getHello();
  // setTimeout(() => {console.log(hello)}, 1000
  // )}
}
