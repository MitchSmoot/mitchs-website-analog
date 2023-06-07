import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { PostService } from '../../../services/blog/post.service';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['../../blog-styles.scss'],
})
export class PostFormComponent {
  constructor(
    private postService: PostService,
    private fb: FormBuilder) {}

  topics = this.postService.topics
  postForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    content: new FormControl<string>('', [Validators.required]),
    topics: this.fb.array([
      this.fb.control('')
    ])
  });

  get topicControls() {
    return this.postForm.get('topics') as FormArray;
  }

  addTopics() {
    this.topicControls.push(this.fb.control(''))
  }

  onSubmit() {
    this.postService.create({
      title: this.postForm.value.title ? this.postForm.value.title : '',
      content: this.postForm.value.content ? this.postForm.value.content : ''
    })
  }
}
