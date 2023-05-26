import { Injectable, computed, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { User } from '@prisma/client';
import { SupabaseService } from '../supabase/supabase.service';

const supabase = createClient(import.meta.env['VITE_SUPABASE_URL'], import.meta.env['VITE_SUPABASE_KEY'])

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any

  constructor(private supabaseService: SupabaseService) {}
    #currentUser = signal<User | undefined>(undefined);
    currentUserComputed = computed(this.#currentUser);

  async userSignUp(email: string, password: string, name: string) {
    this.currentUser = await this.supabaseService.signUp(email, password, name);
  }

  async userSignIn(email: string, password: string) {
    this.currentUser = await
      this.supabaseService.signIn(email, password)
  }

  async signOut() {
    this.supabaseService.signOut()
    this.#currentUser.set(undefined)
  }
}