import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-validation',
  templateUrl: './react-validation.component.html',
  styleUrls: ['./react-validation.component.css']
})
export class ReactValidationComponent implements OnInit {


  
  constructor(private fb:FormBuilder) { }

  frmRegister:any;
  submitted=false;

  get frm(){
    return this.frmRegister.controls;
  }

  ngOnInit(): void {
    this.frmRegister=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(4)]],
      mobile:['',[Validators.required,Validators.pattern(/\+91[0-9]{10}/)]],
      Email:['',[Validators.required,Validators.email]],

    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.frmRegister.invalid){
      return;
    }else{
      alert('Registation Success')
    }
  }

}
