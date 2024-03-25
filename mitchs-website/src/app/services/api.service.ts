import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  public async getHello() {
    await fetch('/api/hello').then(response => {
      return response.json();
    })
  }
}