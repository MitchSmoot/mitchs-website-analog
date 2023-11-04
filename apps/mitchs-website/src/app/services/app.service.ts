import { DOCUMENT } from '@angular/common';
import { Injectable, RendererFactory2, inject, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private renderer = inject(RendererFactory2).createRenderer(null, null);
  private document = inject(DOCUMENT);

  public darkMode = signal<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? 'true'));
  
  updateDarkClassInHTML = effect(() => {
    this.darkMode() ?
      this.renderer.addClass(this.document.body, 'dark') :
      this.renderer.removeClass(this.document.body, 'dark')
    }
  );

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  }
}