import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-thenblock',
  templateUrl: './thenblock.component.html',
  styleUrls: ['./thenblock.component.css']
})
export class ThenblockComponent implements OnInit {

  constructor() { }

  
  isVisible=true;

  thenBlock:TemplateRef<any> | any=null;

  @ViewChild('preview',{static:true})preview:TemplateRef<any> |null=null;

  @ViewChild('details',{static:true})details:TemplateRef<any> |null=null;

  ToggleButton(){
    this.thenBlock= this.thenBlock == this.preview ? this.details : this.preview;
   
  }

  ngOnInit(): void {
    this.thenBlock=this.preview;
  }
}
