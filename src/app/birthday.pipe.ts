import { Injectable, Pipe, PipeTransform } from '@angular/core';
//@Injectable({providedIn:'root'})
//OnInit, OnChnages
@Pipe({
  name: 'visiedcountry'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args);
    return "I am  " + value + '!!! I visied ' + args.join(','); // Vikarm 
  }

}
