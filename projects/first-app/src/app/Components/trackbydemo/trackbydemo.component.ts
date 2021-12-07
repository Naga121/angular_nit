import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackbydemo',
  templateUrl: './trackbydemo.component.html',
  styleUrls: ['./trackbydemo.component.css']
})
export class TrackbydemoComponent implements OnInit {

  Products=[
    {Id:1,Name:'TV',Price:20.2},
    {Id:2,Name:'Mobile',Price:15.2}
  ];

  onAddNewProduct(){
    this.Products=[
      {Id:1,Name:'TV',Price:20.2},
      {Id:2,Name:'Mobile',Price:15.2},
      {Id:3,Name:'Shoe',Price:5.2},
    ];
  }

  TrackChange(index:any){
    return index++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
