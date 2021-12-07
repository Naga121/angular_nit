import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-ref',
  templateUrl: './array-ref.component.html',
  styleUrls: ['./array-ref.component.css']
})
export class ArrayRefComponent implements OnInit {

  constructor() { }

  userName=[];

  ngOnInit(): void {
  }

}
