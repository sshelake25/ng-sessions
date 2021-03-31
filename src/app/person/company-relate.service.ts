import { Injectable } from '@angular/core';
import { PersonInfoService } from './person-info.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyRelateService {

  constructor(private ps:  PersonInfoService) { } // same way to take dep on compoments 

   getCompanyDetails() {
    return this.ps.getPersonDetails() + 'We got this value from other service';
   }
}
