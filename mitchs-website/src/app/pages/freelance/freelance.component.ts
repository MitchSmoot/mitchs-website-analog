import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'mitchs-freelance-page',
    standalone: true,
    templateUrl: './freelance.component.html',
    imports: [CommonModule, RouterModule],
    styleUrls: ['./freelance.component.scss']
})
export default class FreelancePageComponent {
}
