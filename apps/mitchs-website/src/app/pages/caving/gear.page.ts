import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'caving-gear-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<p>Cave Gear!</p>`,

})
export default class CavingGearPageComponent {}