import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-learn',
  templateUrl: './template-form-learn.component.html',
  styleUrls: ['./template-form-learn.component.scss']
})
export class TemplateFormLearnComponent implements OnInit {
  langs: string[] = [
    'Hindin',
    'tel',
    'eng'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
