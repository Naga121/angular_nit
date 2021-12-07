import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolldemo',
  templateUrl: './scrolldemo.component.html',
  styleUrls: ['./scrolldemo.component.css']
})
export class ScrolldemoComponent implements OnInit {

  Products=[
    {Name:'Jbl Speaker',Photo:'assets/jbl.jpg',Category:'Electronics'},
    {Name:'Earpods',Photo:'assets/earpods.jpg',Category:'Electronics'},
    {Name:'Leecooper',Photo:'assets/leecooper.png',Category:'Footwears'},
    {Name:'Niles',Photo:'assets/nikecasual.jpeg',Category:'Footwears'},
    {Name:'Jeans',Photo:'assets/jeans.jpg',Category:'Fashions'},
    {Name:'Shirt',Photo:'assets/shirt.webp',Category:'Fashions'},
    {Name:'Jbl Speaker',Photo:'assets/jbl.jpg',Category:'Electronics'},
    {Name:'Earpods',Photo:'assets/earpods.jpg',Category:'Electronics'},
    {Name:'Leecooper',Photo:'assets/leecooper.png',Category:'Footwears'},
    {Name:'Niles',Photo:'assets/nikecasual.jpeg',Category:'Footwears'},
    {Name:'Jeans',Photo:'assets/jeans.jpg',Category:'Fashions'},
    {Name:'Shirt',Photo:'assets/shirt.webp',Category:'Fashions'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
