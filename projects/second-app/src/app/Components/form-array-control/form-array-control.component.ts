import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array-control',
  templateUrl: './form-array-control.component.html',
  styleUrls: ['./form-array-control.component.css']
})
export class FormArrayControlComponent implements OnInit {


  [x: string]: any;

  constructor(private fb:FormBuilder) { }

  frmRegister = this.fb.group({
    Name: [''],
    Price: [''],
    frmDetails: this.fb.group({
    City: [''],
    InStock: ['']
    }),
    newControls: this.fb.array([this.fb.control('')])
  });
  // Accessor for NewControls
  get newControls(){
    return this.frmRegister.get('newControls') as FormArray;
  }
  AddPhoto() {
    this.newControls.push(this.fb.control(''));
  }
  RemovePhoto(i:any) {
    this.newControls.removeAt(i);
  }


  ngOnInit(): void {
  }

}
