import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoaaService {

  constructor() {}

  public async getSolarData() {
    await fetch('https://services.swpc.noaa.gov/json/solar-cycle/observed-solar-cycle-indices.json').then(response => {
      console.log(response)
      return response.json();
    }
  )}
}
