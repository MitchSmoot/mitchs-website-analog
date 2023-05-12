import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mitchs-website-analog-blog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-page.component.html',
  styleUrls: ['../blog-styles.scss']})
export class BlogPageComponent {

  newBlogButtonClicked() {
    console.log("new Blog")
  }
}
