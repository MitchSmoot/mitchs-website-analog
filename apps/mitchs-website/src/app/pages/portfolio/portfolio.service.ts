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



  Git,
  GitHub,
  Terminal,
  Vim,
  Neovim,
  Linux,
  ArchLinux,
  Ubuntu,
  Windows,
  MacOS,


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
        Technology.PostgreSQL
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
      title: "Telenotes",
      subtitle: "Original Telenotes App",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular,
        Technology.RxJs,
        Technology.NgRx
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
      ]
    },
    {
      title: "PenguinSim",
      subtitle: "A Penguin Simulator",
      ghUrl: "https://github.com/MitchSmoot/penguin-sim",
      technologies: [
        Technology.Ruby
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
        Technology.PostgreSQL,
        Technology.RxJs,
        Technology.NgRx,
        Technology.Firebase,
        Technology.Firestore,
        Technology.Angular17Plus,


        Technology.Git,
        Technology.GitHub,
        Technology.Terminal,
        Technology.Vim,
        Technology.Neovim,
        Technology.Linux,
        Technology.ArchLinux,
        Technology.Ubuntu,
        Technology.Windows,
        Technology.MacOS,
        Technology.Heroku,
        Technology.Vercel,
        Technology.AWS,
      ]
    }
  ]
}