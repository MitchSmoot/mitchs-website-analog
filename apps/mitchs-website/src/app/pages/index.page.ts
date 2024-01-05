import { ApiService } from './../services/api.service';
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
export default class HomePageComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHello().then(response => {
      console.log(response);
    });
  }
}
