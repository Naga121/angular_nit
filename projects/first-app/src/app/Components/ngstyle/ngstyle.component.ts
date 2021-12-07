import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  // styleObj={
  //   'position':'fixed',
  //   'top':'',
  //   'left':''

  // };
  // onMouseMove(e:any){
  //   this.styleObj={
  //     'position':'fixed',
  //     'top':e.clientY+'px',
  //     'left':e.clientX+'px'
  //   }

  // }

  
  bgColorCode='';
  fgColorCode='';
  alignment='center';

  styleObj={
    'background-color': '',
    'color': '',
    'text-align': ''
  }

  applyClick(){
    this.styleObj={
      'background-color':this.bgColorCode,
      'color': this.fgColorCode,
      'text-align': this.alignment
    };
    return this.styleObj;
   
  }

  ngOnInit(): void {
  }

}
