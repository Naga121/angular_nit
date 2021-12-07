import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent{


  Product={
    Name:'Tv',
    Price:52.00,
    InStack:false
  };
}
