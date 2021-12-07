import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendvalue',
  templateUrl: './sendvalue.component.html',
  styleUrls: ['./sendvalue.component.css']
})
export class SendvalueComponent implements OnInit {

 public userName:any;

  constructor() { }
  ngOnInit(): void {
  }

}
