import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templetform',
  templateUrl: './templetform.component.html',
  styleUrls: ['./templetform.component.css']
})
export class TempletformComponent implements OnInit {

  constructor() { }

  onSubmit(obj:any){
    alert('UserName :'+obj.userName)
  }

  ngOnInit(): void {
  }

}
