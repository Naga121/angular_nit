import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
  templateUrl: './ngifdemo.component.html',
  styleUrls: ['./ngifdemo.component.css']
})
export class NgifdemoComponent {

  public Product={
    Name:'Samsung TV',
    Price:2000,
    Photo:"http://home.imgs.ca/wp-content/uploads/2019/02/IMGS-Logo_V1-resizedwaves-01-1024x557.png"
  }
  ButtonText="show";
  isPhotoVisible = false;
  showError=false;
  Preview=true;
 public  Ischecked=true;

  public userName="";


  ToggleDisplay(){
    this.isPhotoVisible=(this.isPhotoVisible == false) ? true:false;
    this.ButtonText=(this.ButtonText == 'show')? 'Hide' : 'show';

  }

  submitClick(){

    if(this.userName==""){
      this.showError = true;
     
    }else{
      this.showError = false;
      alert(`Hello.. ! ${this.userName}`)
     
    }

  }
 
}
