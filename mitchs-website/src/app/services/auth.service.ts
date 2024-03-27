import { Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private supabaseService: SupabaseService) {}

    //Internal Variables
    #isLoading = signal<boolean>(false)
    #currentUser = signal<User | null>(null);

    //External Variables
    isLoading = this.#isLoading.asReadonly()
    currentUser = this.#currentUser.asReadonly()

  async userSignUp(email: string, password: string, name: string) {
    this.#isLoading.set(true)
    await this.supabaseService.signUp(email, password, name)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      this.#isLoading.set(false)
    })
  }

  async userSignIn(email: string, password: string) {
    console.log("loading")
    this.#isLoading.set(true)
    await this.supabaseService.signIn({email, password})
    .then((response) => {
      console.log(response);
      this.#currentUser.set(response.data.user)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      this.#isLoading.set(false)
    })
  }

  async signOut() {
    await this.supabaseService.signOut()
    .catch((error) => {
      console.error(error)
    })
    this.#currentUser.set(null)
  }
}