import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactformdemo',
  templateUrl: './reactformdemo.component.html',
  styleUrls: ['./reactformdemo.component.css']
})
export class ReactformdemoComponent implements OnInit {

  public name=new FormControl('');
  public city=new FormControl('');

  saveClick(){
    this.name.setValue('Nagaraju');
    this.city.setValue('Hyd');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
