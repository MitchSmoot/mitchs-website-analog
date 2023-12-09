import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Scene } from "./scene.component"

@Component({
  selector: "three-canvas",
  standalone: true,
  styleUrls: ["./three.scss"],
  template: `
  <h1>Three Canvas</h1>
  <ngt-canvas class="canvas" [sceneGraph]="Scene" />
  `,
  imports: [NgtCanvas],
})
export class ThreeCanvasComponent {
  readonly Scene = Scene;
}