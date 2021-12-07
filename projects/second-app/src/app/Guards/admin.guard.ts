import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _data:DataService,private _router:Router){}

  users:any=[];
  name="thota";
  password="thota1234";
  role="admin";
  canActivate():boolean | any{
    this.users = this._data.getUsers();
    for(var user of this.users){
      if(user.userName == this.name && user.password == this.password && user.role == this.role){
        alert('Hello!');
        return true;
        
      }
    }
    this._router.navigate(['/login']);
     
  }
  
}
