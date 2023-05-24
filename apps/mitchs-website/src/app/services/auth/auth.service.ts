import { Injectable, computed, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { User } from '@prisma/client';

const supabase = createClient(import.meta.env['VITE_SUPABASE_URL'], import.meta.env['VITE_SUPABASE_KEY'])

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
    #currentUser = signal<User| undefined>(undefined);
    currentUser = computed(this.#currentUser);

  async userSignUp() {
    const userSignUpPromise: { data: any, error: any } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    })
    console.log(userSignUpPromise)
  }

  async userSignIn(email: string, password: string) {
    const userSignInPromise: { data: any, error: any } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    const userSignInResponse = await userSignInPromise
    console.log(userSignInResponse)
  }
}
// // 