import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoaaService } from '../../services/noaa.service';

@Component({
  selector: 'mitchs-radio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.scss'],
})
export default class RadioPageComponent implements OnInit {
  constructor(private noaaService: NoaaService) {}

  ngOnInit() {
    console.log(this.noaaService.getSolarData());
  }

}
