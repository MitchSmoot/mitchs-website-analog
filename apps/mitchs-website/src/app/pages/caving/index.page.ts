import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'caving-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<p>Cave HomePage</p>`,

})
export default class CavingHomePageComponent {}