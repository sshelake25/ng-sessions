
import { Component, OnChanges, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
import { UserDetailsService } from '../user-details.service';

// range(1, 200)
//   .pipe(
//     filter(x => x % 2 === 1),
//     map(x => x + x)
//   )
//   .subscribe(x => console.log(x));

export interface Office {
  employeeName: string;
  loginInfo: object;

  checkLoginDetails(): boolean;
}

@Component({
  selector: 'app-root-list',
  templateUrl: './root-list.component.html',
  styleUrls: ['./root-list.component.scss']
})
export class RootListComponent implements Office {
  firstname: string = "kusuma";
  xyz: string[]; // arrya<Number>
  outfromChild;

  employeeName = 'abc';
  loginInfo = {
    eid: '123',
    elocation: 'us'
  };

  numbers: string[] = ['one', 'two', 'three'];

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32
    },
    {
      "name": "Day  Meyers",
      "age": 21
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34
    },
    {
      "name": "Cook  Tyson",
      "age": 32
    }
  ];
  userDetails;


  //loginInfo.eid.az or loginInfo['eid']['']
  checkLoginDetails() {
    if (this.loginInfo.eid == '12123') {
      return true; // 
    } else {
      return false; // 
    }
  }

  constructor(private userDt: UserDetailsService ) {
    // it wil get invoke/ called when you create instance of class
    // initalization purpose
    this.firstname = "dadssa"
  }

  //flat arrow function syntazx
  add = (A, B) => {
    return A + B;
  }

  addNormal(A,B) {
    return A+B;
  }

  ngAfterViewInit() {

  }

  ngOnChanges() {
    console.log('dsda');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.xyz = ['abc', 'kusuma', 'umshi', 'renuka'];
    console.log('component inilized');

    this.userDetails  =  this.userDt.getUserDetails();

  }

  recivedOutput(data) {
    this.outfromChild = data
    console.log(data);
  }
}
