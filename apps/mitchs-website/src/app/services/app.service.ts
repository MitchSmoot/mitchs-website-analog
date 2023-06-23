import { DOCUMENT } from '@angular/common';
import { Injectable, PLATFORM_ID, RendererFactory2, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private platformId = inject(PLATFORM_ID);
  private renderer = inject(RendererFactory2).createRenderer(null, null);
  private document = inject(DOCUMENT);

  darkMode = signal<boolean>(true);

  constructor() { }
}
