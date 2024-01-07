import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoaaService } from '../services/noaa.service';
import { HighchartsChartModule } from 'highcharts-angular';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'mitchs-radio-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighchartsChartModule],
  templateUrl: './radio/radio-page.component.html',
  styleUrls: ['./radio/radio-page.component.scss'],
})
export default class RadioPageComponent implements OnInit {
  constructor(private noaaService: NoaaService) {}

  // Highcharts: typeof Highcharts = Highcharts;
  // chartConstructor: string = 'chart';
  // chartOptions: Highcharts.Options = { };
  // updateFlag: boolean = false;
  // oneToOneFlag: boolean = true;


  ngOnInit() {
    console.log("init");
  }

}
