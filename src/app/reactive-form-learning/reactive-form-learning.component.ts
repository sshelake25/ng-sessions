import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-learning',
  templateUrl: './reactive-form-learning.component.html',
  styleUrls: ['./reactive-form-learning.component.scss']
})
export class ReactiveFormLearningComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
    'Hidin',
    'Tamil',
    'Guju'
  ];

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    //     myform = new FormGroup({
    //       name: new FormGroup({ (2)
    //           firstName: new FormControl(), (3)
    //           lastName: new FormControl(),
    //       }),
    //       email: new FormControl(),
    //       : new FormControl(),
    //       language: new FormControl()
    //   });
    // }

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  }

}
