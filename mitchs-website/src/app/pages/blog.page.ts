import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './blog/post/post-form/post-form.component';
import { PostService } from '../services/post.service';
import { PostComponent } from './blog/post/post.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mitchs-website-analog-blog-page',
  standalone: true,
  imports: [CommonModule, PostFormComponent, PostComponent, RouterOutlet],
  templateUrl: './blog/blog-page.component.html',
  styleUrls: ['./blog/blog-styles.scss']})
export default class BlogPageComponent implements OnInit {

  constructor(private postService: PostService) {}
  postsLoading = this.postService.isLoading
  posts = this.postService.posts
  devModeIsActive: boolean = (import.meta.env.VITE_MODE == "Dev")
  showPostForm = false;

  ngOnInit() {
    if (!this.postService.posts.length) {
      this.postService.get('*')
    }
  }

  newBlogButtonClicked() {
    this.showPostForm = !this.showPostForm
  }
}
