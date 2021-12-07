import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getData(){
    return[
      {Name:'JBL Speaker',Price:12.05},
      {Name:'TV',Price:2.05},
      {Name:'Speaker',Price:1.05},
    ];
  }
}
