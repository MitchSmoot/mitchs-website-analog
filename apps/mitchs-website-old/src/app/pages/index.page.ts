import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './(home)/home.component.html',
  styleUrls: ['./(home)/home.component.scss'],
})
export default class HomePageComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getHello();
  }

  async getHello() {
  let hello: any = "blah"
  hello = await this.apiService.getHello();
  setTimeout(() => {console.log(hello)}, 1000
  )}
}