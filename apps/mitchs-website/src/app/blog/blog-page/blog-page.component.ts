import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post/post-form/post-form.component';
import { PostService } from '../../services/blog/post.service';
import { Post } from '@prisma/client';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'mitchs-website-analog-blog-page',
  standalone: true,
  imports: [CommonModule, PostFormComponent, PostComponent],
  templateUrl: './blog-page.component.html',
  styleUrls: ['../blog-styles.scss']})
export class BlogPageComponent implements OnInit {

  constructor(private postService: PostService) {}
  postsLoading = this.postService.isLoading
  posts = this.postService.posts

  ngOnInit() {

    this.postService.get('*')
  }

  newBlogButtonClicked() {
    console.log("new Blog")
  }
}
