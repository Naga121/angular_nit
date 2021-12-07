import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evendemo',
  templateUrl: './evendemo.component.html',
  styleUrls: ['./evendemo.component.css']
})
export class EvendemoComponent implements OnInit {

  constructor() { }

  Products=['assets/jeans.jpg','assets/leecooper.png','assets/nikecasusl.jpeg'];
  userName:any;
  msg='';
  sliderValue=0;
  imgSource='assets/jbl.jpg';

  onFocus(){
    this.msg='Name in Block'
  }
  onBlur(){
    this.msg='';
    this.userName=this.userName.toUpperCase();
  }

  changeProduct(){
    this.imgSource=this.Products[this.sliderValue];
  }
  ngOnInit(): void {
  }

}
