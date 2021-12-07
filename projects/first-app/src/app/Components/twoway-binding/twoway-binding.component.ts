import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {

  public Name = 'Samsung TV';
  public Price = 45000.55;
  public ShippedTo = 'Delhi';
  public InStock = true;

  public Product={
    Name:"",
    Price :0,
    ShippedTo:"",
    InStock:false
  };

  public UpdateClick(){
    this.Product={
      Name:this.Name,
      Price:this.Price,
      ShippedTo:this.ShippedTo,
      InStock:this.InStock
    }
  }
}
