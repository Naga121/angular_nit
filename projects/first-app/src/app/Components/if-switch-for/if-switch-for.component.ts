import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-switch-for',
  templateUrl: './if-switch-for.component.html',
  styleUrls: ['./if-switch-for.component.css']
})
export class IfSwitchForComponent implements OnInit {

  constructor() { }

  Categories=['Select Category','Electronics','Footwear','Fashion'];
  Electronics=['Select Electronic','Jbl Speaker','Earpods'];
  Footwear=['Select Footwear','Nike Casuals','Lee Cooper'];
  Fashion=['Select Fashion','Jeans','Shirt'];

  details=[
    {Name:'Jbl Speaker',Price:20.20,Photo:'assets/jbl.jpg'},
    {Name:'Earpods',Price:25.20,Photo:'assets/earpods.jpg'},
    {Name:'Nike Casuals',Price:10.20,Photo:'assets/nikecasual.jpg'},
    {Name:'Lee Cooper',Price:5.20,Photo:'assets/leecooper.jpg'},
    {Name:'Jeans',Price:15.20,Photo:'assets/jeans.jpg'},
    {Name:'Shirt',Price:3.20,Photo:'assets/shirt.jpg'},
  ];

  SelectCategoryName='Select Category';
  SelectProductName:any;
  Products:any []=[];

  selectQty:any;

  SearchedProduct:any={
    Name:'',
    Price:0,
    Photo:''
  };

  cartItems:any []=[];
  isCartVisible=false;
  cartItemsCount=0;

  GetCount(){
    this.cartItemsCount=this.cartItems.length;
  }

  onCategoryChange(){
    switch(this.SelectCategoryName){
      case'Electronics':
        this.Products=this.Electronics;
        break;
      case'Footwear':
        this.Products=this.Footwear;
        break;
      case'Fashion':
      this.Products=this.Fashion;
        break;
      default:
        this.Products=['Select any Categoy'];
        break;
    }
  }

  onProductChange(){
    this.SearchedProduct = this.details.find(x=>x.Name==this.SelectProductName);
    alert(this.SelectProductName)
    
  }

  onAddToCartClick(){
    this.cartItems.push(this.SearchedProduct);
    alert("add to Cart");
    this.GetCount();
  }

  onToggleCatr(){
    this.isCartVisible=this.isCartVisible==false ? true:false;
  }

  onRemoveClick(index: number){
    let flag=confirm('Are you sure? want to delete?');
    if(flag==true){
      this.cartItems.splice(index,1);
      alert('item Delete from catr')
      this.GetCount();
    }
  }

  ngOnInit(): void {
  }

}
