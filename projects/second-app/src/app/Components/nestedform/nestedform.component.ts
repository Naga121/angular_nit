import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent implements OnInit {

  frmRegister=new FormGroup({
    Name:new FormControl(''),
    Price:new FormControl(''),
    frmInfo:new FormGroup({
      City:new FormControl(''),
      inStock:new FormControl('')
    })
  });

 upDate(){
    this.frmRegister.patchValue({
      Name:'Tv',
      frmInfo:({
        City:'Hyd',
        inStock:true
      })
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
