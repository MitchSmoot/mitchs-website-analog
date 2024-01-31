import { Component } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from "highcharts";

@Component({
  selector: "mitchs-tech-chart",
  standalone: true,
  imports: [HighchartsChartModule],
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
      style="width: 100%; height: 400px; display: block;"
    ></highcharts-chart>
  `,
  styleUrls: ["./portfolio.scss"],
})
export default class TechChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
}