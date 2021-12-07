import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-cond',
  templateUrl: './inter-cond.component.html',
  styleUrls: ['./inter-cond.component.css']
})
export class InterCondComponent implements OnInit {

  Products=[
    {Name:'Jbl Speaker',Price:20.20,Photo:'assets/jbl.jpg'},
    {Name:'Earpods',Price:25.20,Photo:'assets/earpods.jpg'},
    {Name:'Nike Casuals',Price:10.20,Photo:'assets/nikecasual.jpeg'},
    {Name:'Lee Cooper',Price:5.20,Photo:'assets/leecooper.png'},
    {Name:'Jeans',Price:15.20,Photo:'assets/jeans.jpg'},
    {Name:'Shirt',Price:3.20,Photo:'assets/shirt.webp'},
  ];

  Categorys=['All','Electronics','Footwears','Fashions'];
  selectedCategory:any='All';
  textSerch:any;

  constructor() { }

  ngOnInit(): void {
  }

}
