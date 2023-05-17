import { Injectable, computed, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { User } from '@prisma/client';

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY)

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  #currentUser = signal<User| undefined>(undefined);
  currenUser = computed(this.#currentUser);

  async userSignup() {
    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    })
  }
}
