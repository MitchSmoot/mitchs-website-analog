import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

const isProd = import.meta.env.VITE_VERCEL_ENV === "production";

@Directive({ selector: '[HideInProd]', standalone: true })
export class HideinProdDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    if (isProd) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}