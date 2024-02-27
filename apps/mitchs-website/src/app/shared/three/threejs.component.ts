import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
import { g } from 'vitest/dist/suite-UrZdHRff';




@Component({
  selector: "threejs-canvas",
  standalone: true,
  styleUrls: ["./three.scss"],
  templateUrl: './threejs.component.html',
  imports: [],
})
export class ThreeCanvasComponent implements OnInit {

  ngOnInit(): void {
    // import div
    const container = document.getElementById('canvas') as HTMLElement;

    // create scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    camera.lookAt( scene.position );

    // renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    const geometryCore = new THREE.BoxGeometry( 2.95, 2.95, 2.95 );
    const geometryX = new THREE.BoxGeometry( 0.025, 0.95, 0.95 );
    const geometryY = new THREE.BoxGeometry( 0.95, 0.025, 0.95 );
    const geometryZ = new THREE.BoxGeometry( 0.95, 0.95, 0.025 );

    const materialGrey = new THREE.MeshBasicMaterial( { color: 0x444444 } );
    const materialGreen = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const materialRed = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const materialBlue = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    const materialYellow = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const materialWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    const materialOrange = new THREE.MeshBasicMaterial( { color: 0xffa500 } );

    // Core
    const core = new THREE.Mesh( geometryCore, materialGrey );
    core.position.x = 0;
    scene.add( core );

    // Green Face
    const greenCenter = new THREE.Mesh( geometryY, materialGreen );
    greenCenter.position.y = 1.5;
    scene.add( greenCenter );

    const greenUp = new THREE.Mesh( geometryY, materialGreen );
    greenUp.position.y = 1.5;
    greenUp.position.z = 1;
    scene.add( greenUp );

    const greenDown = new THREE.Mesh( geometryY, materialGreen );
    greenDown.position.y = 1.5;
    greenDown.position.z = -1;
    scene.add( greenDown );

    const greenLeft = new THREE.Mesh( geometryY, materialGreen );
    greenLeft.position.y = 1.5;
    greenLeft.position.x = 1;
    scene.add( greenLeft );

    const greenRight = new THREE.Mesh( geometryY, materialGreen );
    greenRight.position.y = 1.5;
    greenRight.position.x = -1;
    scene.add( greenRight );

    const greenUpLeft = new THREE.Mesh( geometryY, materialGreen );
    greenUpLeft.position.y = 1.5;
    greenUpLeft.position.x = 1;
    greenUpLeft.position.z = 1;
    scene.add( greenUpLeft );

    const greenUpRight = new THREE.Mesh( geometryY, materialGreen );
    greenUpRight.position.y = 1.5;
    greenUpRight.position.x = -1;
    greenUpRight.position.z = 1;
    scene.add( greenUpRight );

    const greenDownLeft = new THREE.Mesh( geometryY, materialGreen );
    greenDownLeft.position.y = 1.5;
    greenDownLeft.position.x = 1;
    greenDownLeft.position.z = -1;
    scene.add( greenDownLeft );

    const greenDownRight = new THREE.Mesh( geometryY, materialGreen );
    greenDownRight.position.y = 1.5;
    greenDownRight.position.x = -1;
    greenDownRight.position.z = -1;
    scene.add( greenDownRight );

    // Blue Face
    const blueCenter = new THREE.Mesh( geometryY, materialBlue );
    blueCenter.position.y = -1.5;
    scene.add( blueCenter );

    const blueUp = new THREE.Mesh( geometryY, materialBlue );
    blueUp.position.y = -1.5;
    blueUp.position.z = 1;
    scene.add( blueUp );

    const blueDown = new THREE.Mesh( geometryY, materialBlue );
    blueDown.position.y = -1.5;
    blueDown.position.z = -1;
    scene.add( blueDown );

    const blueLeft = new THREE.Mesh( geometryY, materialBlue );
    blueLeft.position.y = -1.5;
    blueLeft.position.x = 1;
    scene.add( blueLeft );

    const blueRight = new THREE.Mesh( geometryY, materialBlue );
    blueRight.position.y = -1.5;
    blueRight.position.x = -1;
    scene.add( blueRight );

    const blueUpLeft = new THREE.Mesh( geometryY, materialBlue );
    blueUpLeft.position.y = -1.5;
    blueUpLeft.position.x = 1;
    blueUpLeft.position.z = 1;
    scene.add( blueUpLeft );

    const blueUpRight = new THREE.Mesh( geometryY, materialBlue );
    blueUpRight.position.y = -1.5;
    blueUpRight.position.x = -1;
    blueUpRight.position.z = 1;
    scene.add( blueUpRight );

    const blueDownLeft = new THREE.Mesh( geometryY, materialBlue );
    blueDownLeft.position.y = -1.5;
    blueDownLeft.position.x = 1;
    blueDownLeft.position.z = -1;
    scene.add( blueDownLeft );

    const blueDownRight = new THREE.Mesh( geometryY, materialBlue );
    blueDownRight.position.y = -1.5;
    blueDownRight.position.x = -1;
    blueDownRight.position.z = -1;
    scene.add( blueDownRight );

    // Red Face
    const redCenter = new THREE.Mesh( geometryX, materialRed );
    redCenter.position.x = 1.5;
    scene.add( redCenter );

    const redUp = new THREE.Mesh( geometryX, materialRed );
    redUp.position.x = 1.5;
    redUp.position.z = 1;
    scene.add( redUp );

    const redDown = new THREE.Mesh( geometryX, materialRed );
    redDown.position.x = 1.5;
    redDown.position.z = -1;
    scene.add( redDown );

    const redLeft = new THREE.Mesh( geometryX, materialRed );
    redLeft.position.x = 1.5;
    redLeft.position.y = 1;
    scene.add( redLeft );
    
    const redRight = new THREE.Mesh( geometryX, materialRed );
    redRight.position.x = 1.5;
    redRight.position.y = -1;
    scene.add( redRight );

    const redUpLeft = new THREE.Mesh( geometryX, materialRed );
    redUpLeft.position.x = 1.5;
    redUpLeft.position.y = 1;
    redUpLeft.position.z = 1;
    scene.add( redUpLeft );

    const redUpRight = new THREE.Mesh( geometryX, materialRed );
    redUpRight.position.x = 1.5;
    redUpRight.position.y = -1;
    redUpRight.position.z = 1;
    scene.add( redUpRight );

    const redDownLeft = new THREE.Mesh( geometryX, materialRed );
    redDownLeft.position.x = 1.5;
    redDownLeft.position.y = 1;
    redDownLeft.position.z = -1;
    scene.add( redDownLeft );

    const redDownRight = new THREE.Mesh( geometryX, materialRed );
    redDownRight.position.x = 1.5;
    redDownRight.position.y = -1;
    redDownRight.position.z = -1;
    scene.add( redDownRight );

    // Orange Face
    const orangeCenter = new THREE.Mesh( geometryX, materialOrange );
    orangeCenter.position.x = -1.5;
    scene.add( orangeCenter );
    
    const orangeUp = new THREE.Mesh( geometryX, materialOrange );
    orangeUp.position.x = -1.5;
    orangeUp.position.z = 1;
    scene.add( orangeUp );

    const orangeDown = new THREE.Mesh( geometryX, materialOrange );
    orangeDown.position.x = -1.5;
    orangeDown.position.z = -1;
    scene.add( orangeDown );

    const orangeLeft = new THREE.Mesh( geometryX, materialOrange );
    orangeLeft.position.x = -1.5;
    orangeLeft.position.y = 1;
    scene.add( orangeLeft );

    const orangeRight = new THREE.Mesh( geometryX, materialOrange );
    orangeRight.position.x = -1.5;
    orangeRight.position.y = -1;
    scene.add( orangeRight );

    const orangeUpLeft = new THREE.Mesh( geometryX, materialOrange );
    orangeUpLeft.position.x = -1.5;
    orangeUpLeft.position.y = 1;
    orangeUpLeft.position.z = 1;
    scene.add( orangeUpLeft );

    const orangeUpRight = new THREE.Mesh( geometryX, materialOrange );
    orangeUpRight.position.x = -1.5;
    orangeUpRight.position.y = -1;
    orangeUpRight.position.z = 1;
    scene.add( orangeUpRight );

    const orangeDownLeft = new THREE.Mesh( geometryX, materialOrange );
    orangeDownLeft.position.x = -1.5;
    orangeDownLeft.position.y = 1;
    orangeDownLeft.position.z = -1;
    scene.add( orangeDownLeft );

    const orangeDownRight = new THREE.Mesh( geometryX, materialOrange );
    orangeDownRight.position.x = -1.5;
    orangeDownRight.position.y = -1;
    orangeDownRight.position.z = -1;
    scene.add( orangeDownRight );

    // Yellow Face
    const yellowCenter = new THREE.Mesh( geometryZ, materialYellow );
    yellowCenter.position.z = 1.5;
    scene.add( yellowCenter );

    const yellowUp = new THREE.Mesh( geometryZ, materialYellow );
    yellowUp.position.z = 1.5;
    yellowUp.position.y = 1;
    scene.add( yellowUp );

    const yellowDown = new THREE.Mesh( geometryZ, materialYellow );
    yellowDown.position.z = 1.5;
    yellowDown.position.y = -1;
    scene.add( yellowDown );

    const yellowLeft = new THREE.Mesh( geometryZ, materialYellow );
    yellowLeft.position.z = 1.5;
    yellowLeft.position.x = 1;
    scene.add( yellowLeft );

    const yellowRight = new THREE.Mesh( geometryZ, materialYellow );
    yellowRight.position.z = 1.5;
    yellowRight.position.x = -1;
    scene.add( yellowRight );

    const yellowUpLeft = new THREE.Mesh( geometryZ, materialYellow );
    yellowUpLeft.position.z = 1.5;
    yellowUpLeft.position.x = 1;
    yellowUpLeft.position.y = 1;
    scene.add( yellowUpLeft );

    const yellowUpRight = new THREE.Mesh( geometryZ, materialYellow );
    yellowUpRight.position.z = 1.5;
    yellowUpRight.position.x = -1;
    yellowUpRight.position.y = 1;
    scene.add( yellowUpRight );

    const yellowDownLeft = new THREE.Mesh( geometryZ, materialYellow );
    yellowDownLeft.position.z = 1.5;
    yellowDownLeft.position.x = 1;
    yellowDownLeft.position.y = -1;
    scene.add( yellowDownLeft );

    const yellowDownRight = new THREE.Mesh( geometryZ, materialYellow );
    yellowDownRight.position.z = 1.5;
    yellowDownRight.position.x = -1;
    yellowDownRight.position.y = -1;
    scene.add( yellowDownRight );




    camera.position.z = 8;


    function animate() {
      requestAnimationFrame( animate );

      scene.rotation.x += 0.01;
      scene.rotation.y += 0.01;

      renderer.render( scene, camera );
    }
    animate(); 
    container.appendChild( renderer.domElement );
  }

}



