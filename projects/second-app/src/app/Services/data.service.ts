import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){

    return [
      {userName:'naga',password:'naga123',role:'admin'},
      {userName:'raju',password:'raju123',role:'manager'},
    ];
  }

}
