import { Injectable } from "@angular/core";

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
  role?: string;
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
  Python = 8,

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
  Django = 108,

// Microservice Frameworks
  Vite = 201,
  Nitro,
  Angular = 203,
  Angular17Plus = 204,
  Astro = 205,

// Databases
  PostgreSQL = 301,
  Firebase = 302,
  Firestore = 303,

// Key Libraries
  RxJs = 401,
  NgRx = 402,
  Highcharts = 403,
  Threejs = 404,
  Supabase = 405,



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
  public portfolioItemsTimpGrotto: PortfolioItem[] = [
    {
      title: "timpgrotto.org",
      subtitle: "The Timpanogos Grotto Website",
      url: "https://timpgrotto.org",
      description: "The Timpanogos Grotto website is a website for the Timpanogos Grotto, a local chapter of the National Speleological Society. The website is built with Angular 17+ and uses a PostgreSQL database.",
      role: "Project Lead",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular17Plus,
        Technology.PostgreSQL
      ]
    },
  ]
  public portfolioItemsTelenotes: PortfolioItem[] = [
    {
      title: "Telenotes 2.0",
      subtitle: "Improved Telenotes Rebuilt on NgRx",
      description: "We rebuilt the telenotes app from scratch using improved architecture and best practices. I built multiple features from start to finish, all of which utilized NgRx patterns and state management.",
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
      title: "Telenotes",
      subtitle: "Original Telenotes App",
      description: "Telenotes is a CRM application that features a speech to data service aimed at minimizing the amount of time sales reps have to spend on data entry, so they can focus more on sales. I was in a front-end role, building out several angular components, and helping out with rapid bugfixing and hotfixes.",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Angular,
      ]
    },
  ]
  public portfolioItemsFeatured: PortfolioItem[] = [
    {
      title: "This Website",
      subtitle: "My New Personal Website",
      ghUrl: "https://github.com/MitchSmoot/mitchs-website-analog",
      description: "My new website, created using the AnalogJS meta-framework. Contains multiple interactive elements based on many of my hobbies. Take a look around!",
      technologies: [
        Technology.TypeScript,
        Technology.HTML,
        Technology.SCSS,
        Technology.Nodejs,
        Technology.Analog,
        Technology.Vite,
        Technology.Angular17Plus,
        Technology.PostgreSQL,
        Technology.Supabase,
        Technology.Threejs,
      ]
    },
    {
      title: "estatelandscaping.org",
      subtitle: "Freelance Project",
      url: "http://estatelandscaping.org",
      description: "A freelance project for a landscaping company. I chose the Astro framework for this static website.",
      technologies: [
        Technology.Astro,
        Technology.HTML,
        Technology.CSS,
        Technology.Vercel
      ]
    },
  ]
  public portfolioItems: PortfolioItem[] = [
    {
      title: "django-polls",
      subtitle: "A simple polling website",
      ghUrl: "http://github.com/MitchSmoot/django-polls",
      description: "This is a pollig website I created to get some experience with Python and the Django framework.",
      technologies: [
        Technology.Python,
        Technology.Django,
        Technology.HTML,
        Technology.CSS
      ]
    },
    {
      title: "nvim-config",
      subtitle: "My Neovim Configuration",
      description: "These are my config files for Neovim, written in Lua. Includes plugins to enable file searching, LSP installation, syntax highlighting, and other features to bring the editor mroe in line with a modern IDE",
      technologies: [
        Technology.Neovim,
        Technology.Lua,
      ]
    },
    {
      title: "Smootimer (Javascript prototype)",
      subtitle: "Smootimer, rewritten in JavaScript",
      description: "This is a rewrite of my original Smootimer capstone project. This time, with a more relevant tech stack. This was also my first project utilizing Google Firebase and Firestore as the database.",
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
      title: "Smootimer (Original prototype)",
      subtitle: "Competitive puzzle timer app. My Capstone Project",
      description: "A website for the speedcubing community. Members would time themselves solving puzzles such as the Rubik's cube, storing their times in a database. The app would show their times plotted on a chart, where they can view their improvement over time for each puzzle.",
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
      description: "My first major rails project. The original mitchsmoot.com.",
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
      description: "An early project I built as art of a Ruby on Rails course.",
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
      description: "Written in raw Ruby code and runs in the terminal. An interactive story where the user can create, name, and raise a pet penguin. The program tracks the penguin's vitals and happiness over time as the user makes decisions on how to take care of it.",
      technologies: [
        Technology.Ruby,
        Technology.Terminal
      ]
    }
  ]
}
