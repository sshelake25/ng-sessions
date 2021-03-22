import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { last, map, min, take } from 'rxjs/operators';


// import { interval } from 'rxjs';
// import { take, map } from 'rxjs/operators';
// const numbers = interval(1000);
// const takeThree = numbers.pipe(
//   take(3),
//   map((v) => Date.now())
// );
// takeThree.subscribe(value => console.log("Subscriber: " + value));

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',

  // template: `<h4>NgSwitch</h4>
  // <ul *ngFor="let person of people"
  //     [ngSwitch]="person.country">
  //   <li *ngSwitchCase="'UK'"
  //       class="text-success">
  //     E{{ person.name }} ({{ person.country }})
  //   </li>
  //   <li *ngSwitchCase="'USA'"
  //       class="text-primary">
  //     {{ person.name }} $$$$({{ person.country }})
  //   </li>
  //   <li *ngSwitchCase="'HK'"
  //       class="text-danger">
  //    A {{ person.name }} ({{ person.country }})
  //   </li>
  //   <li *ngSwitchDefault
  //       class="text-warning">
  //    RR--- {{ person.name }} ({{ person.country }})
  //   </li>
  // </ul>

  // <h2 *ngIf="isPerson">This is visible </h2>
  // `,
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {
  isPerson: string = 'US';
  timer;

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];


  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  getPersonContry(isPerson) {
    return !isPerson; //not ! operator
  }

  constructor() { }

  ngOnInit(): void {
    let num = 5;
    const numbers = interval(1000); // api
    console.log(numbers);
    numbers.pipe(
      take(10), ///1
      // map(v => { //2
      //   console.log(v);
      //   return Date.now();
      // }),
      map(v => {
        console.log(v, num);
        return num = num + 1; // num++
      }), //3,
      // last()
      min()
    ).subscribe(
      //callback // 
      // //normal js syntac
      // function (value) { // with name
      //   console.log("Subscriber: " + value)
      // }

      //flat arrow 
      (value) => {
        this.timer = value;
        console.log("Subscriber: " + value)
      }
    );
  }

}
