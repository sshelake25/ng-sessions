import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.max(5)
      ]),
      langauge : new FormControl('English')
    });

  }

}
