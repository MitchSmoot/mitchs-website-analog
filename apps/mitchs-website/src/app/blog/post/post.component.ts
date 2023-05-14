import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['../blog-styles.scss'],
})
export class PostComponent {}
