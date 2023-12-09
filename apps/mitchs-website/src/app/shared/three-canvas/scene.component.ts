import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
  standalone: true,
  template: `
    <ngt-mesh>
      <ngt-box-geometry />
      <ngt-mesh-basic-material />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Scene {}
