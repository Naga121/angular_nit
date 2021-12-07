import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  title='nagaraju thota';
  price=220.20;

  public today:any=Date.now();

  number=0.2520;

  products=['tv','mobile','car'];
  constructor() { }

  ngOnInit(): void {
  }

}
