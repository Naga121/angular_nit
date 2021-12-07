import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username:string='';
  usertype:string='';
  email:string='';
  status:Boolean=false;
  httpOptions: any;


  constructor(private http:HttpClient) {
    let username=sessionStorage.getItem("username");
    let usertype=sessionStorage.getItem("usertype");
    if(username && usertype){
      this.status=true;
      this.username=username;
      this.usertype=usertype;
    }
  }

  getStatus():Boolean{
    return this.status;
  }
  register(obj):Observable<object>{
    this.httpOptions= {
      headers : new Headers({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("")
  }

}
