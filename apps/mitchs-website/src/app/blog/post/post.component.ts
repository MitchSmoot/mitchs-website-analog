import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/blog/post.service';
import { Post } from '@prisma/client';

@Component({
  selector: 'post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['../blog-styles.scss'],
})
export class PostComponent {
  constructor(private postService: PostService) {}
  @Input() post: Post = {}

  onDelete() {
    console.log("Delete Clicked")
    this.postService.delete(this.post.id)
  }
}
