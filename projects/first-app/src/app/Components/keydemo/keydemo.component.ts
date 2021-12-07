import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent implements OnInit {

  constructor() { }

  Users = [
    {UserName: 'john'},
    {UserName: 'john123'},
    {UserName: 'david'},
    {UserName: 'david_nit'}
    ];

  userName='';
  password='';
  message='';
  regExp= /(?=.*[A-Z])\w{4,10}/;

  validStyle=false;
  invalidStyle=false;
  showWraning=false;
  passwordMessage='';

  VerifyUser(){
    for(var user of this.Users){
      if(user.UserName==this.userName){
        this.message='User Name Taken -try another';
        this.invalidStyle=true;
        this.validStyle=false;
        break;
      }else{
        this.message='User name is Avilable';
        this.invalidStyle=false;
        this.validStyle=true;
      }
    }
  }

  VerifyCaps(e:any){
    if(e.KeyCode>=65 && e.KeyCode<=90){
      this.showWraning=true;
    }else{
      this.showWraning=false;
    }

  }

  VerifyPasswordStr(){
    if(this.password.match(this.regExp)){
      this.passwordMessage='strong Password';
    }else{
      if(this.password.length<4){
        this.passwordMessage='poor password';
      }else{
      this.passwordMessage='Weak Password';
      }
    }

  }

  ngOnInit(): void {
  }

}
