import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  helloMsg="Hello from Parent Component property";
  msg='';

  GetFromChild(e:any){
    this.msg=e;
  }

  ngOnInit(): void {
  }

}
