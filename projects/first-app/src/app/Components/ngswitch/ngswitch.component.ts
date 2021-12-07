import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  Product={
    Name:"Naga",
    Price:200.2,
    InStack:true,
    Photo:"https://th.bing.com/th/id/OIP._qGWDkBQVBTgB11WL7Oq_AHaLG?w=116&h=180&c=7&o=5&dpr=1.25&pid=1.7",
    Description:'mvgr ro t  ejqroi'
  };

  selectdView='details';
  view=['details','preview','description'];
  count=0;

  showView(e:any){
    this.selectdView= e.target.Name;
  }

  NextClick(){
    this.count++;
    this.selectdView=this.view[this.count];
    if(this.count==this.view.length){
      this.selectdView=this.view[0];
    }
  }
  PreviousClick(){
    this.count--;
    this.selectdView=this.view[this.count]
  }

  ngOnInit(): void {
  }

}
