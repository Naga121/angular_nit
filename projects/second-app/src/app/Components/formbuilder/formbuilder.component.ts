import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  frmRegister=this.fb.group({
    Name:[''],
    Price:[''],
    frmDeteils:this.fb.group({
      City:[''],
      InStock:['']
    })
  });

  upDate(){
    
  }

  ngOnInit(): void {
  }

}
