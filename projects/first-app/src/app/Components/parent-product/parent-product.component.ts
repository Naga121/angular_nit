import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent implements OnInit {

  constructor() { }

  Products=[
    {Name:'Jbl Speaker',Price:20.2,Photo:'assets/jbl.jpg',Category:'Electronics'},
    {Name:'Earpods',Price:15.0,Photo:'assets/earpods.jpg',Category:'Electronics'},
    {Name:'Leecooper',Price:10.02,Photo:'assets/leecooper.png',Category:'Footwears'},
    {Name:'Niles',Price:15.2,Photo:'assets/nikecasual.jpeg',Category:'Footwears'},
    {Name:'Jeans',Price:5.2,Photo:'assets/jeans.jpg',Category:'Fashions'},
    {Name:'Shirt',Price:2.02,Photo:'assets/shirt.webp',Category:'Fashions'},

  ];

  allCount=this.Products.length;
  electronicsCount=this.Products.filter(x=>x.Category=='Electronics').length;
  footweatsCount=this.Products.filter(x=>x.Category=='Footwears').length;
  fashionsCount=this.Products.filter(x=>x.Category=='Fashions').length;

  CategoryName="All";

  onFilterChange(e:any){
    this.CategoryName=e;

  }

  ngOnInit(): void {
  }

}
