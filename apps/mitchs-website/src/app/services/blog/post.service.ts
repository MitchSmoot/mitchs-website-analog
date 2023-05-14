
import { Injectable } from '@angular/core';

import { Post } from '@prisma/client'


export interface Filter {
  filter: string
}


@Injectable({
  providedIn: 'root'
})
export class PostService {


  get(filter?: Filter) {
    if (filter) {
      console.log("Getting posts, filtered by " + filter)
      return [placeholderPost]
    } else {
      console.log("Getting all posts")
      return [placeholderPost]
    }
  }

  getbyId(id: number) {
    console.log("GET post" + id.toString())
  }

  create(post: {title: string, content: string}) {
    console.log(`Creating Post. Title:${post.title}, content: ${post.content}`)
  }

  update(id: number, post: Post) {
    console.log(`Updating Post ${id}, content: ` + post.toString())
  }

  delete(id: number) {
    console.log("Deleting Post " + id.toString())
  }

}

const placeholderPost: Post = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "Lorem Ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  published: true,
  authorId: 0

}
