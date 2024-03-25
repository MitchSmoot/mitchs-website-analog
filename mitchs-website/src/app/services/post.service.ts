
import { Injectable, model, signal} from '@angular/core';
import { SupabaseService } from './supabase.service';

export interface Post {
  id: Number;
  createdAt: Date;
  updatedAt?: Date;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private supabaseService: SupabaseService) {}

  //TODO: fix Post typing
  #posts = signal<any[]>([])
  #isLoading = signal<boolean>(false)
  
  posts = this.#posts.asReadonly()
  isLoading = this.#isLoading.asReadonly();
  topics = [
    {id: 0, name: "General"},
    {id: 1, name: "Programming"},
    {id: 2, name: "Travel"},
    {id: 3, name: "Caving"},
    {id: 4, name: "Radio"}
  ]

  async get(filter: string) {
    this.#isLoading.set(true)
    await this.supabaseService.select('Post', filter)
    .then((response) => {
      if (response.error) {
        throw response.error
      } else {
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
      console.log(response);
      this.#isLoading.set(false);
      this.#posts.update((posts) => [posts, post]);
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
