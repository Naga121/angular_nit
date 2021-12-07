import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-ref',
  templateUrl: './object-ref.component.html',
  styleUrls: ['./object-ref.component.css']
})
export class ObjectRefComponent implements OnInit {

  constructor() { }
  isBorder=false;
  isShadow=false;
  isColor=true;
  isText=false;

  ngOnInit(): void {
  }

}
