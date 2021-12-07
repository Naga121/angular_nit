import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-ngfor',
  templateUrl: './nested-ngfor.component.html',
  styleUrls: ['./nested-ngfor.component.css']
})
export class NestedNgforComponent implements OnInit {

  constructor() { }
   NavItem=[
    {Category:'Electronic', Products:['Jbl','Earpods']},
    {Category:'Footwear',   Products:['Nike','Lee']},
    {Category:'Fashion',    Products:['Shirt','Jeans']}
  ];

  ngOnInit(): void {
  }

}
