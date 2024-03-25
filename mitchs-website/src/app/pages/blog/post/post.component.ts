import { HideinProdDirective } from '../../../shared/hide-in-prod.directive';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'post',
  standalone: true,
  imports: [CommonModule, HideinProdDirective],
  templateUrl: './post.component.html',
  styleUrls: ['../blog-styles.scss'],
})
export class PostComponent {
  constructor(private postService: PostService) {}
  //TODO: fix Post typing
  @Input() post = {id: 0, title: "", content: ""}

  onDelete() {
    console.log("Delete Clicked")
    this.postService.delete(this.post.id)
  }

  commentButtonClicked() {
    console.log(`commenting on post ${this.post.id}`)
  }
}
