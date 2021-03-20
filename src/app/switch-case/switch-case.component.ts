import { Component, OnInit } from '@angular/core';

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
  }

}
