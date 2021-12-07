import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../../Services/Captcha.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public code:any;
  constructor( private captcha:CaptchaService ,private data:DataService) { }

  public Products:any []=[];
  
  ngOnInit(): void {
    this.Products=this.data.getData();
    this.code=this.captcha.GenerateCode();
    
  }

  

  onClickRefresh(){
    this.code=this.captcha.GenerateCode();
  }

  

}
