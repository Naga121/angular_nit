import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-filter',
  templateUrl: './child-filter.component.html',
  styleUrls: ['./child-filter.component.css']
})
export class ChildFilterComponent implements OnInit {

  constructor() { }

  @Input() AllCount=0;
  @Input() ElectronicsCount=0;
  @Input() FootwearsCount=0;
  @Input() FashionsCount=0;

  CategoryName='All';

  @Output() sendCategoryName:EventEmitter<string>=new EventEmitter<string> ();

  onCategoryChange(){
    this.sendCategoryName.emit(this.CategoryName);
  }

  ngOnInit(): void {
  }

}
