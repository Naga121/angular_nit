import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() msg='Child component prperty';
  helloChild='Hello from Child';
  @Output() msgToParent:EventEmitter<string>=new EventEmitter<string>();

  sendValuToParent(){
    this.msgToParent.emit(this.helloChild);

  }
  ngOnInit(): void {
  }

}
