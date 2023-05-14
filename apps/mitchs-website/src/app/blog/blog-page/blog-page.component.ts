import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post/post-form/post-form.component';
import { PostService } from '../../services/blog/post.service';
import { Post } from '@prisma/client';

@Component({
  selector: 'mitchs-website-analog-blog-page',
  standalone: true,
  imports: [CommonModule, PostFormComponent],
  templateUrl: './blog-page.component.html',
  styleUrls: ['../blog-styles.scss']})
export class BlogPageComponent implements OnInit {

  posts: Post[] | undefined

  constructor(private _postService: PostService) {}

  ngOnInit() {

    this.posts = this._postService.get()
    console.log(this.posts)
  }

  newBlogButtonClicked() {
    console.log("new Blog")
  }
}
