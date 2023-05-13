import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  id: number
  content: string
}

export interface Filter {
  filter: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  get(filter: Filter) {
    if (filter) {
      console.log("Getting posts, filtered by " + filter)
    } else {
      console.log("Getting all posts")
    }
  }

  getbyId(id: number) {
    console.log("GET post" + id.toString())
  }

  create(post: Post) {
    console.log("Creating Post:" + post.toString())
  }

  update(id: number, post: Post) {
    console.log(`Updating Post ${id}, content: ` + post.toString())
  }

  delete(id: number) {
    console.log("Deleting Post " + id.toString())
  }
}
