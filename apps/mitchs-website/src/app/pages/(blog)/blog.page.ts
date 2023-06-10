import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post/post-form/post-form.component';
import { PostService } from '../../services/blog/post.service';
import { PostComponent } from './post/post.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mitchs-website-analog-blog-page',
  standalone: true,
  imports: [CommonModule, PostFormComponent, PostComponent, RouterOutlet],
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-styles.scss']})
export default class BlogPageComponent implements OnInit {

  constructor(private postService: PostService) {}
  postsLoading = this.postService.isLoading
  posts = this.postService.posts

  ngOnInit() {
    if (!this.postService.posts.length) {
      this.postService.get('*')
    }
  }

  newBlogButtonClicked() {
    console.log("new Blog")
  }
}
