import { Injectable, computed, signal } from '@angular/core';
import { User } from '@prisma/client';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private supabaseService: SupabaseService) {}

    #currentUser = signal<User | undefined>(undefined);
    currentUser = computed(this.#currentUser);

    #isLoading = signal<boolean>(false)
    isLoading = computed(this.#isLoading);

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
    await this.supabaseService.signIn(email, password)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log("done loading")
      this.#isLoading.set(false)
    })
  }

  async signOut() {
    await this.supabaseService.signOut()
    .catch((error) => {
      console.error(error)
    })
    this.#currentUser.set(undefined)
  }
}