import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isvsform',
  templateUrl: './isvsform.component.html',
  styleUrls: ['./isvsform.component.css']
})
export class IsvsformComponent implements OnInit {

  showCityError=true;

  onCityChange(val:any){
    if(val =='notcity'){
      this.showCityError=true;
    }else{
      this.showCityError=false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
