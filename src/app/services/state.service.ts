import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private cityJsonURL = 'assets/json/cities.json';
  private apiBaseUrl = 'justdial.com/api';

  constructor(private http: HttpClient) { }

  public getStateCity(): Observable<any> {
    // get value .subcribe()// method 
    let url = this.apiBaseUrl + '/india/car';
    return this.http.get(this.cityJsonURL); // get put post delete
    return this.http.post(this.cityJsonURL, { city: 'ban', 'whicarea': 'adc' }); // get put post delete
  }
}
