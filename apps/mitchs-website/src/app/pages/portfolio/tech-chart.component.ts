import { Component } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import * as Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
import { TechIconComponent } from "./tech-icon.component";
HC_more(Highcharts);

@Component({
  selector: "mitchs-tech-chart",
  standalone: true,
  imports: [HighchartsChartModule, TechIconComponent],
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
      style="width: 100%; height: 100%; display: block;"
    ></highcharts-chart>
    
  `,
  styleUrls: ["./portfolio.scss"],
})
export default class TechChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: "packedbubble",
      height: "60%",
      backgroundColor: "transparent",
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      floating: true,
      layout: "vertical",
      backgroundColor: "var(--clr-bg-secondary)",
      borderRadius: 5,
      itemStyle: {
        color: "var(--clr-text-primary)",
      },
    },
    title: {
      text: "Mitch's Tech Experience",
      align: 'center',
      style: {
        color: "var(--clr-text-primary)",
      }
    },
    tooltip: {
      useHTML: true,
      pointFormat: "<b>{point.name}</b>"
    },
    plotOptions: {
      packedbubble: {
        minSize: '10%',
        maxSize: '80%',
        zMin: 10,
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
          format: `
          <span>{point.name}</span>
          `,
          filter: {
            property: 'y',
            operator: '>',
            value: 49
          },
          style: {
            color: 'black',
            textOutline: 'none',
            fontWeight: 'bold',
            fontSize: '14px'
          }
        }
      }
    },
    series: [{
      name: 'Programming Languages',
      data: [{
        name: 'Javascript',
        value: 700,
      },
      {
        name: 'Typescript',
        value: 700,
      },
      {
        name: 'HTML',
        value: 500,
      },
      {
        name: 'CSS',
        value: 700
      },
      {
        name: 'Sass',
        value: 300
      },
      {
        name: 'Ruby',
        value: 500
      },
      {
        name: 'Zig',
        value: 100
      },
      {
        name: 'Coffeescript',
        value: 15
      },
      {
        name: 'Java',
        value: 50
      },
      {
        name: 'Python',
        value: 380
      },
      {
        name: 'Lua',
        value: 160
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
        value: 700
      },
      {
        name: 'Rails',
        value: 500
      },
      {
        name: 'Vite',
        value: 300
      },
      {
        name: 'Astro',
        value: 350
      },
      {
        name: 'Django',
        value: 180
      },
      {
        name: 'Spring',
        value: 100
      }]
    },
    {
      name: 'Databases',
      data: [{
        name: 'PostgreSql',
        value: 300
      },
      {
        name: 'Supabase',
        value: 160
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
        value: 200
      },
      {
        name: 'NgRx',
        value: 200
      },
      {
        name: 'Git',
        value: 300
      },
      {
        name: 'Three.js',
        value: 200
      },
      {
        name: 'Bun',
        value: 50
      },
      {
        name: 'Highcharts',
        value: 200
      }]
    },
    {
      name: 'Other',
      data: [{
        name: 'Vim/Neovim',
        value: 300
      },
      {
        name: 'Arch Linux',
        value: 160
      },
      {
        name: 'Linux',
        value: 160
      },
      {
        name: 'Terminal',
        value: 240
      },
      {
        name: 'Vercel',
        value: 50
      },
      {
        name: 'Heroku',
        value: 50
      }]
    },
  ]

  };

}
