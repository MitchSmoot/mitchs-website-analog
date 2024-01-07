import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'mitchs-website-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <mitchs-website-analog-welcome /> `,
})
export default class HomeComponent {}
