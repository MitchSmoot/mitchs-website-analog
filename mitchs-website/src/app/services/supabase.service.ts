import { Injectable } from '@angular/core';
import { SupabaseClient, createClient, SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient

  //Initialize Supabase Client
  constructor() {
    this.supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY)
  }

  //SUPABASE API CALLS

  public signIn(credentials: SignInWithPasswordCredentials) {
    return this.supabase.auth.signInWithPassword(credentials)
  }

  public signUp(email: string, password: string, name: string) {
    return this.supabase.auth.signUp({email: email, password: password, options: { data: {name: name}}})
  }

  public signOut() {
    return this.supabase.auth.signOut()
  }

  // to select everything, use '*' as the filter
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
