import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Technology } from "./portfolio.service";

@Component({
  selector: "mitchs-tech-icon",
  standalone: true,
  imports: [CommonModule],
  template: `
  <img src="{{this.iconUrl}}" class="tech-icon">
  `,
  styleUrls: ["./portfolio.scss"],
})
export class TechIconComponent implements OnInit {
  @Input() tech: Technology | undefined = undefined;
  iconUrl: string | undefined = undefined;

  ngOnInit() {
    switch(this.tech) {
      case Technology.Ruby:
        this.iconUrl = "assets/tech-icons/ruby.svg";
        break;
      case Technology.JavaScript:
        this.iconUrl = "assets/tech-icons/javascript.svg";
        break;
      case Technology.TypeScript:
        this.iconUrl = "assets/tech-icons/typescript.svg";
        break;
      case Technology.Java:
        this.iconUrl = "assets/tech-icons/java.svg";
        break;
      case Technology.Lua:
        this.iconUrl = "assets/tech-icons/lua.svg";
        break;
      case Technology.Zig:
        this.iconUrl = "assets/tech-icons/zig.svg";
        break;
      case Technology.CoffeeScript:
        this.iconUrl = "assets/tech-icons/coffeescript.svg";
        break;
      case Technology.HTML:
        this.iconUrl = "assets/tech-icons/html.svg";
        break;
      case Technology.CSS:
        this.iconUrl = "assets/tech-icons/css.svg";
        break;
      case Technology.SCSS:
        this.iconUrl = "assets/tech-icons/scss.svg";
        break;
      case Technology.Rails:
        this.iconUrl = "assets/tech-icons/rails.svg";
        break;
      case Technology.Nodejs:
        this.iconUrl = "assets/tech-icons/nodejs.svg";
        break;
      case Technology.Bun:
        this.iconUrl = "assets/tech-icons/bun.png";
        break;
      case Technology.SpringBoot:
        this.iconUrl = "assets/tech-icons/springboot.svg";
        break;
      case Technology.Analog:
        this.iconUrl = "assets/tech-icons/analog.svg";
        break;
      case Technology.Vite:
        this.iconUrl = "assets/tech-icons/vite.svg";
        break;
      case Technology.Angular:
        this.iconUrl = "assets/tech-icons/angular.svg";
        break;
      case Technology.PostgreSQL:
        this.iconUrl = "assets/tech-icons/postgresql.svg";
        break;
      case Technology.RxJs:
        this.iconUrl = "assets/tech-icons/rxjs.png";
        break;
      case Technology.NgRx:
        this.iconUrl = "assets/tech-icons/ngrx.svg";
        break;
      case Technology.Firebase:
        this.iconUrl = "assets/tech-icons/firebase.svg";
        break;
      case Technology.Firestore:
        this.iconUrl = "assets/tech-icons/firestore.svg";
        break;
      case Technology.Angular17Plus:
        this.iconUrl = "assets/tech-icons/angular17plus.png";
        break;
    }
    console.log(this.iconUrl);
  }
}