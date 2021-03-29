import { Injectable } from '@angular/core';

//@Component
//@NgModule
//@Injectable
//telling our class types to agular framwork

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  getUserDetails() {
    return {
      "class": 'angular',
      "session": 'http serverices'
    }
  }
}
