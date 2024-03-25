import { Component } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

@Component({
  selector: "mitchs-cubing-chart",
  standalone: true,
  imports: [HighchartsChartModule],
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
      style="width: 100%; height: 100%; display: block;"
    ></highcharts-chart>
    
  `,
  styleUrls: ["./home.component.scss"],
})
export default class CubingChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Cube Solve Times",
      align: 'center',
      style: {
        color: "var(--clr-text-primary)",
      }
    },
    xAxis: {
      categories: ["2x2 Cube", "Skewb", "Pyraminx", "3x3 Cube", "Clock", "4x4 Cube", "Megaminx"],
      title: {
        text: "Puzzle"
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Time (s)",
        align: 'high'
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true
        },
        groupPadding: 0.1
      }
    },
    series: [{
      type: 'bar',
      name: "Best Average of 5",
      data: [6.76, 10.94, 16.11, 22.35, 27.00, 99.37, 101.21]
    }, {
      type: 'bar',
      name: "Best Single Solve", 
      data: [3.59, 6.20, 11.11, 15.46, 16.47, 84.66, 98.51]
    }]

  };

}
