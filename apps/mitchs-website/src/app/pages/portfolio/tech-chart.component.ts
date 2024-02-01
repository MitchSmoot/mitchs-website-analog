import { Component } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

@Component({
  selector: "mitchs-tech-chart",
  standalone: true,
  imports: [HighchartsChartModule],
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
      style="width: 100%; height: 1000px; display: block;"
    ></highcharts-chart>
  `,
  styleUrls: ["./portfolio.scss"],
})
export default class TechChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "100%",
    },
    title: {
      text: 'Tech Experience',
      align: 'center'
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}"
    },
    plotOptions: {
      packedbubble: {
          minSize: '10%',
          maxSize: '50%',
          zMin: 0,
          zMax: 1000 ,
          layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
          },
          dataLabels: {
              enabled: true,
              format: '<p>{point.name}</p>',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 1
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal',
                  fontSize: '16px'
              }
          }
      }
    },
    series: [{
      name: 'Languages',
      data: [{
        name: 'Javascript',
        value: 1000
      },
      {
        name: 'Typescript',
        value: 1000
      },
      {
        name: 'HTML',
        value: 1000
      },
      {
        name: 'CSS',
        value: 900
      },
      {
        name: 'Sass',
        value: 800
      },
      {
        name: 'Ruby',
        value: 500
      },
      {
        name: 'Zig',
        value: 20
      },
      {
        name: 'Coffeescript',
        value: 10
      },
      {
        name: 'Lua',
        value: 200
      }]
    },
    {
      name: 'Frameworks',
      data: [{
        name: 'Angular',
        value: 1000
      },
      {
        name: 'Analog',
        value: 800
      },
      {
        name: 'Rails',
        value: 500
      },
      {
        name: 'Vite',
        value: 400
      },
      {
        name: 'Spring',
        value: 100
      }]
    },
    {
      name: 'Database',
      data: [{
        name: 'Postgres',
        value: 500
      },
      {
        name: 'Supabase',
        value: 200
      },
      {
        name: 'Firebase',
        value: 100
      },
      {
        name: 'Firestore',
        value: 100
      }]
    },
    {
      name: 'Technologies',
      data: [{
        name: 'Node.js',
        value: 300
      },
      {
        name: 'RxJs',
        value: 100
      },
      {
        name: 'NgRx',
        value: 100
      },
      {
        name: 'Git',
        value: 500
      },
      {
        name: 'Three.js',
        value: 100
      },
      {
        name: 'Ruby',
        value: 100
      },
      {
        name: 'Lua',
        value: 100
      }]
    },
    {
      name: 'Other',
      data: [{
        name: 'Vim/Neovim',
        value: 200
      },
      {
        name: '',
        value: 100
      },
      {
        name: 'NgRx',
        value: 100
      },
      {
        name: 'Git',
        value: 500
      },
      {
        name: 'Three.js',
        value: 100
      },
      {
        name: 'Ruby',
        value: 100
      },
      {
        name: 'Lua',
        value: 100
      }]
    }, 
  ]

  };

}
