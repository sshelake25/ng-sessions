import { OnDestroy } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//1
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @Input() productList; //porotery
  @Input() FirstName;
  @Input() LastName;
  //2
  @Output() amount = new EventEmitter<any>();

  constructor() { }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    //3
    this.amount.emit({
      "name": "Vikarm Ready acc",
      "age": 34
    });
    console.log(this.productList, this.FirstName, this.LastName);
  }

  

}
