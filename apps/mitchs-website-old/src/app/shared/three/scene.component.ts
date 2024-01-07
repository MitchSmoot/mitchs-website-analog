import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtBeforeRenderEvent, NgtArgs } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import * as THREE from 'three';
import { Cube } from './cube.component.ts';

extend(THREE);
extend({ OrbitControls });

@Component({
  standalone: true,
  imports: [Cube, NgtArgs],
  template: `
    <ngt-ambient-light [intensity]="0.5" />
    <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
    <ngt-point-light [position]="-10" />

    <demo-cube></demo-cube>

    <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Scene {
}
