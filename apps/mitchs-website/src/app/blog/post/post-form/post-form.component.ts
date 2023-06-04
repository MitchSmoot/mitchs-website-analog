import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../../../services/blog/post.service';

@Component({
  selector: 'post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['../../blog-styles.scss'],
})
export class PostFormComponent {
  constructor(private postService: PostService) {}

  topics = this.postService.topics
  postForm = new FormGroup({
    title: new FormControl<string>(''),
    content: new FormControl<string>('')
  });

  onSubmit() {
    this.postService.create({
      title: this.postForm.value.title ? this.postForm.value.title : '',
      content: this.postForm.value.content ? this.postForm.value.content : ''
    })
  }
}
