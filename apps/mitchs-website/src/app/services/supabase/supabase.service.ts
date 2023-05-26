import { Injectable } from '@angular/core';
import { AuthSession, SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(import.meta.env['VITE_SUPABASE_URL'], import.meta.env['VITE_SUPABASE_KEY'])
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    console.log(this.session)
    return this._session
  }

  public signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({email, password})
  }

  public signUp(email: string, password: string, name: string) {
    return this.supabase.auth.signUp({email: email, password: password, options: { data: {name: name}}})
  }

  public signOut() {
    return this.supabase.auth.signOut()
  }
}
