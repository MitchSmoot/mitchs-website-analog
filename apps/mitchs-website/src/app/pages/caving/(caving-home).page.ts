import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mitchs-caving-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <h2>Caving</h2>
  <h4>Exploring the Unknown, Protecting the Known</h4>
  <div class="container">
    <p>
      Caving is an exhilarating adventure activity that takes individuals into the hidden depths of the Earth's intricate cave systems. It offers a unique opportunity to explore and appreciate the natural wonders that lie beneath the surface. As cave enthusiasts venture into the dark and mysterious passages, they encounter breathtaking geological formations, such as stalagmites and stalactites, intricate underground rivers, and fascinating ecosystems that thrive in the absence of light. Caving requires a combination of physical agility, mental resilience, and a deep sense of curiosity to navigate the challenges posed by narrow passages, uneven terrain, and occasional tight squeezes. It provides an unparalleled sense of connection with the Earth's geological history and offers an unforgettable experience of exploration and discovery.
    
      According to the National Speleological Society's safety standards, practicing safe caving involves several key guidelines. Firstly, it's essential to have proper training and knowledge of cave exploration techniques. Always explore caves with a group, as solo caving is strongly discouraged. Before entering a cave, inform someone on the surface about your plans and expected return time. Wear appropriate safety gear, including a helmet with a mounted light source, sturdy footwear, and protective clothing. Carry essential equipment like extra light sources, a first aid kit, a map or guidebook, and sufficient food and water. Stay aware of potential hazards such as loose rocks, slippery surfaces, and potential flooding. Finally, respect the cave environment by leaving no trace and avoiding damage to fragile formations.
    </p>
    <a routerLink="/caving/gallery" routerLinkActive="active">Check out my gallery</a>
    <a routerLink="/caving/gear" routerLinkActive="active">Lear more about caving gear</a>

  </div>
  `
})
export default class CavingHomePageComponent {}
