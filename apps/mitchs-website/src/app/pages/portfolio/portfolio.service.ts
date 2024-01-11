import { Injectable } from "@angular/core";
import { NgtRxStore } from "angular-three";

export interface PortfolioItem {
  title: string;
  subtitle: string;
  url?: string;
  ghUrl?: string;
  technologies: Technology[];
  description?: string;
  company?: string;
  startDate?: Date;
  endDate?: Date;
}

export enum Technology {
  
// Proper Languages
  Ruby = 1,
  JavaScript = 2,
  TypeScript = 3,
  Java = 4,
  Lua = 5,
  Zig = 6,
  CoffeeScript = 7,

// Template Languages
  HTML = 51,
  CSS = 52,
  SCSS = 53,

// Full Frameworks/Runtimes
  Rails = 101,
  Nodejs = 102,
  Bun = 103,
  SpringBoot = 104,
  Analog = 107,
  
// Microservice Frameworks
  Vite = 201,
  Nitro,
  Angular = 203,
  Angular17Plus = 204,

// Databases
  PostgreSQL = 301,
  Firebase = 302,
  Firestore = 303,

// Key Libraries
  RxJs = 401,
  NgRx = 402,
  Highcharts = 403,
  Threejs = 404,



  Git,
  GitHub,
  Terminal,
  Vim,
  Neovim,
  Linux,
  ArchLinux,
  Ubuntu,
  Windows,


  Heroku,
  Vercel,
  AWS,
  



}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public portfolioItems: PortfolioItem[] = [
    {
      title: "This Website",
      subtitle: "My New Personal Website",
      ghUrl: "https://github.com/MitchSmoot/mitchs-website-analog",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Analog,
        Technology.Vite,
        Technology.Angular17Plus,
        Technology.PostgreSQL,
        Technology.Threejs,
      ]
    },
    {
      title: "timpgrotto.org",
      subtitle: "The Timpanogos Grotto Website",
      url: "https://timpgrotto.org",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular17Plus,
        Technology.PostgreSQL
      ]
    },
    {
      title: "nvim-config",
      subtitle: "My Neovim Configuration",
      technologies: [
        Technology.Neovim,
        Technology.Lua,
      ]
    },
    {
      title: "Telenotes 2.0",
      subtitle: "Improved Telenotes Rebuilt on NgRx",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular,
        Technology.NgRx,
        Technology.RxJs,
      ]
    },
    {
      title: "Smootimer (Javascript prototype)",
      subtitle: "Smootimer, rewritten in JavaScript",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular,
        Technology.NgRx,
        Technology.RxJs,
        Technology.Firebase,
        Technology.Firestore,
        Technology.Highcharts,
      ]
    },
    {
      title: "Telenotes",
      subtitle: "Original Telenotes App",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular,
      ]
    },
    {
      title: "Smootimer (Original prototype)",
      subtitle: "Competitive puzzle timer app. My Capstone Project",
      technologies: [
        Technology.Ruby,
        Technology.Rails,
        Technology.HTML,
        Technology.SCSS,
        Technology.PostgreSQL,
        Technology.Heroku,
        Technology.Highcharts,
      ]
    },
    {
      title: "mitchsmoot.com (Original)",
      subtitle: "My Original Personal Website",
      technologies: [
        Technology.Ruby,
        Technology.Rails,
        Technology.HTML,
        Technology.SCSS,
        Technology.JavaScript,
        Technology.CoffeeScript,
        Technology.PostgreSQL,
        Technology.Heroku
      ]
    },
    {
      title: "Overtime App",
      subtitle: "A simple Overtime tracker",
      technologies: [
        Technology.Ruby,
        Technology.Rails,
        Technology.HTML,
        Technology.CSS,
        Technology.JavaScript,
        Technology.CoffeeScript,
        Technology.PostgreSQL
      ]
    },
    {
      title: "PenguinSim",
      subtitle: "A Penguin Simulator",
      ghUrl: "https://github.com/MitchSmoot/penguin-sim",
      technologies: [
        Technology.Ruby,
        Technology.Terminal
      ]
    },
    {
      title: "Icon Test",
      subtitle: "A Test of Icons",
      technologies: [
        Technology.Ruby,
        Technology.JavaScript,
        Technology.TypeScript,
        Technology.Java,
        Technology.Lua,
        Technology.Zig,
        Technology.CoffeeScript,
        Technology.HTML,
        Technology.CSS,
        Technology.SCSS,
        Technology.Rails,
        Technology.Nodejs,
        Technology.Bun,
        Technology.SpringBoot,
        Technology.Analog,
        Technology.Vite,
        Technology.Angular,
        Technology.Angular17Plus,
        Technology.PostgreSQL,
        Technology.Firebase,
        Technology.Firestore,
        Technology.RxJs,
        Technology.NgRx,
        Technology.Highcharts,
        Technology.Threejs,


        Technology.Git,
        Technology.GitHub,
        Technology.Terminal,
        Technology.Vim,
        Technology.Neovim,
        Technology.Linux,
        Technology.ArchLinux,
        Technology.Ubuntu,
        Technology.Windows,
        Technology.Heroku,
        Technology.Vercel,
        Technology.AWS,
      ]
    }
  ]
}