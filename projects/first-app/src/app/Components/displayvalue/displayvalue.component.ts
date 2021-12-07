import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-displayvalue',
  templateUrl: './displayvalue.component.html',
  styleUrls: ['./displayvalue.component.css']
})
export class DisplayvalueComponent implements OnChanges {

  @Input() public userName: any;
  public PreviousValue: any;
  public currentValue: any;
  public msg:any;

  constructor() { }
 

  ngOnChanges(changes:SimpleChanges){
    for(var property in changes){
      let change = changes[property];
      this.currentValue=change.currentValue;
      this.PreviousValue=change.previousValue;
    }
    if(this.currentValue==this.PreviousValue){
      this.msg='No Change Detected';
    }else{
      this.msg='Change Deteced';
    }
  }

}
