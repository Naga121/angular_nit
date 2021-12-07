import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css']
})
export class MousedemoComponent implements OnInit {

  constructor() { }
  
  styleObj={
    'color':''
  };

  zoomObj={
    'hight':'',
    'width':''
  };

  
  offerImg='assets/nikecasual.jpeg';

  setColor(e:any){
    this.styleObj={
      'color':e.target.id
    }
  }

  stopMarquee(e:any){
    e.target.stop();
  }
  startMarquee(e:any){
    e.target.start();
  }

  zoomIN(){
    this.zoomObj={
      'hight':'400px',
      'width':'300px'
    }

  }
  zoomOut(){
    this.zoomObj={
      'hight':'100px',
      'width':'200px'
    }

  }

  showOffer(){
    this.offerImg='shirt.webp';
  }
  hideOffer(){
    this.offerImg='jeans.jpg';
  }

  ngOnInit(): void {
  }

}
