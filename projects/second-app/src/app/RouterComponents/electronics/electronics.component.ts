import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  
  public course =[
    {id:1,name:"Angular"},
    {id:2,name:"React"},
    {id:3,name:"Vue"},
    {id:4,name:"SpringBoot"},
  ];

  public selectedId:any;
  
  constructor(private _route:Router,private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
    })
  }

  onSelect(e: any){
    // this._route.navigate(['/elctronics',e.id]);
    this._route.navigate([e.id],{relativeTo:this._activeRoute});
  }

  isSelected(e:any){
    return e.id === this.selectedId;
  }
}
