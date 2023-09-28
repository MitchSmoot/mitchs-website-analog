import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-cave-repair-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <article>
    <h2>Cave Formation Project</h2>
    <p>
      The Cave Formation Repair Project is a project to repair cave formations that have been damaged by humans.
    </p>
    <p>
      THe project begain in June 2018 in New Mexico, and has since been expanded to a few other caves, including the Lehman caves, in Nevada's Great Basin National Park.
    </p>
  </article>
  `
})
export default class CaveRepairPageComponent {}
