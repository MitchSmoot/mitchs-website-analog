
import { Injectable, computed, signal} from '@angular/core';
import { Post } from '@prisma/client'
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private supabaseService: SupabaseService) {}

  #isLoading = signal<boolean>(false)
  isLoading = computed(this.#isLoading);

  #posts = signal([])
  posts = computed(this.#posts)

  async get(filter: string) {
    this.#isLoading.set(true)
    await this.supabaseService.select('Post', filter)
    .then((response) => {
      if (response.error) {
        throw response.error
      } else {
      console.log(response)
      this.#posts.set(response.data)
      this.#isLoading.set(false)
      }
    })
  }

  getbyId(id: number) {
    console.log("GET post" + id.toString())
  }

  async create(post: {title: string, content: string}) {
    this.#isLoading.set(true)
    await this.supabaseService.insert('Post', [{
      title: post.title,
      content: post.content
    }])
    .then((data) => {
      console.log(data)
      this.#isLoading.set(false)
    })
  }

  async update(id: number, post: Post) {
    console.log(`Updating Post ${id}, content: ` + post.toString())
    this.#isLoading.set(true)
    await this.supabaseService.updateById('Post', id, post)
    .then((data) => {
      console.log(data)
      this.#isLoading.set(false)
      // TODO: update post in state
    })
  }

  delete(id: number) {
    this.supabaseService.deleteById('Post', id);
    // TODO: filter deleted post from state
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
