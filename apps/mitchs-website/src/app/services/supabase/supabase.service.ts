import { Injectable } from '@angular/core';
import { AuthSession, SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  //Initialize Supabase Client
  constructor() {
    this.supabase = createClient(import.meta.env['VITE_SUPABASE_URL'], import.meta.env['VITE_SUPABASE_KEY'])
  }

  //SUPABASE API CALLS

  public signIn(email: string, password: string) {
    console.log(email, password)
    return this.supabase.auth.signInWithPassword({email: email, password: password})
  }

  public signUp(email: string, password: string, name: string) {
    return this.supabase.auth.signUp({email: email, password: password, options: { data: {name: name}}})
  }

  public signOut() {
    return this.supabase.auth.signOut()
  }

  public select(model: string, filter: string) {
    return this.supabase.from(model).select(filter)
  }

  public selectPaginated(model:string, filter:string, min: number, max: number) {
    return this.supabase.from(model).select(filter).range(min, max)
  }

  public insert(model: string, row: object[]) {
    return this.supabase.from(model).insert(row)
  }

  public updateById(model:string, id: number, updatedItem: object) {
    return this.supabase.from(model).update(updatedItem).eq("id", id)
  }

  public deleteById(model: string, id: number) {
    return this.supabase.from(model).delete().eq("id", id)
  }
}
