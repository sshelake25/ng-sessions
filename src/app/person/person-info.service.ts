import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoService {

  constructor() { }

  getPersonDetails() {
    return 'Angular Class';
  }

}
