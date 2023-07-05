import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'caving-gear-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h2>Cave Gear!</h2>
  `,

})
export default class CavingGearPageComponent {}