import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-footwears',
  templateUrl: './footwears.component.html',
  styleUrls: ['./footwears.component.css']
})
export class FootwearsComponent implements OnInit {
  
  public courseId: any;

  constructor(private _activeRoute:ActivatedRoute, private _route:Router) { }

  ngOnInit() {
    // let eId= this._activeRoute.snapshot.paramMap.get('id');
    // this.courseId=eId;
      this._activeRoute.paramMap.subscribe((map: ParamMap)=>{
        // console.log(map.get('id'));
        let id =map.get('id');
        this.courseId=id;
      });
  }
  toBack(){
    let selectedId=this.courseId ? this.courseId :null;
    // this._route.navigate(['/elctronics',{id:selectedId}]);
    this._route.navigate(['../',{id:selectedId}],{relativeTo:this._activeRoute});
  }

  toPrevious(){
    let preId=this.courseId--;
    // this._route.navigate(['/elctronics-list',preId]);
    this._route.navigate(['../',preId],{relativeTo:this._activeRoute});

  }

  toNext(){
    let nextId=this.courseId ++;
    if(nextId <= 4){
      this._route.navigate(['../',nextId],{relativeTo:this._activeRoute});
    }
    // this._route.navigate(['/elctronics-list',nextId]);
    

  }

  showDuration(){
    this._route.navigate(['duration'],{relativeTo:this._activeRoute});

  }

  showFee(){
    this._route.navigate(['fee'],{relativeTo:this._activeRoute});

  }

}
