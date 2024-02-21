import { Component, Renderer2 } from '@angular/core';
import * as THREE from 'three';




@Component({
  selector: "threejs-canvas",
  standalone: true,
  styleUrls: ["./three.scss"],
  template: `
    <canvas id="bg"></canvas>
  `,
  imports: [],
})
export class ThreeCanvasComponent {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer.setPixelRatio(window.devicePixelRatio);
   renderer.setSize(window.innerWidth, window.innerHeight);  
}