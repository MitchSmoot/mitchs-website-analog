
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

  #posts = signal<Post[]>([])
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
    });
  }

  async create(post: {title: string, content: string}) {
    this.#isLoading.set(true)
    await this.supabaseService.insert('Post', [{
      title: post.title,
      content: post.content
    }])
    .then((response) => {
      console.log(response)
      this.#isLoading.set(false)
      this.#posts.mutate((posts) => posts.push(post))
    });
    //TODO: Populate newly pushed post with ID from database
  }

  async update(id: number, updatedPost: Post) {
    console.log(`Updating Post ${id}, content: ` + updatedPost.toString())
    this.#isLoading.set(true)
    await this.supabaseService.updateById('Post', id, updatedPost)
    .then((data) => {
      console.log(data)
      this.#posts.update(posts =>
        posts.map(post => post.id === id ? updatedPost : post ))
      this.#isLoading.set(false)
      // TODO: make sure this updates in state
    });
  }

  async delete(id: number) {
    this.#posts.update((posts) => posts.filter(post => post.id !== id))
    await this.supabaseService.deleteById('Post', id).throwOnError()
  }

}
