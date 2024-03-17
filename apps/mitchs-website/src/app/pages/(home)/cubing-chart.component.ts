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
      categories: ["2x2", "3x3", "4x4", "Clock", "Megaminx"],
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
      name: "Best Average",
      data: [6.76, 22.35, 99.37, 27.00, 101.21]
    }, {
      name: "Best Single",
      data: [3.59, 15.46, 84.66, 16.47, 98.51]
    }]

  };

}
