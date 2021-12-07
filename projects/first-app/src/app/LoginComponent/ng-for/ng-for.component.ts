import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  categoris=['SelectCategory','Electronics', 'Footwear', 'Fashion'];
  electronics = ['Select Electronics', 'JBL Speaker', 'Earpods'];
  footwear = ['Select Footwear', 'Nike Casuals', 'Lee Cooper Boot'];
  fashion = ['Select Fashion', 'Jeans', 'Shirt'];

  productData = [
    {Name: 'JBL Speaker', Price: 4500.55, Photo: 'assets/jbl.jpg'},
    {Name: 'Earpods', Price: 2500.55, Photo: 'assets/earpods.jpg'},
    {Name: 'Nike Casuals', Price: 6500.55, Photo: 'assets/nikecasal.jpg'},
    {Name: 'Lee Cooper Boot', Price: 2500.55, Photo:'assets/leecooper.png'},
    {Name: 'Jeans', Price: 1500.55, Photo: 'assets/jeans.jpg'},
    {Name: 'Shirt', Price: 2500.55, Photo: 'assets/shirt.webp'},
    ];

    selectedCategoryName="SelectCategory";
    selectedProductName="";
  constructor() { }

  ngOnInit(): void {
  }

  onChangeCategory(){}

}
