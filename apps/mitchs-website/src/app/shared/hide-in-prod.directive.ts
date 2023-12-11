import { Directive, ElementRef, Renderer2 } from '@angular/core';

const isProd = import.meta.env.VITE_MODE === "Prod";

@Directive({ selector: 'HideInProd' })
export class HideinProdDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    if (isProd) {
      console.log('Hiding element in production');
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}