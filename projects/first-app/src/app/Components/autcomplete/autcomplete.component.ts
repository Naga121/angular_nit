import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-autcomplete',
  templateUrl: './autcomplete.component.html',
  styleUrls: ['./autcomplete.component.css']
})
export class AutcompleteComponent  {

  countries=[
    {Name:'India',Photo:'assets/jbl.jpg',Code:+91},
    {Name:'USA',Photo:'assets/jeans.jpg',Code:+44}
  ];

  constructor(public dialog: MatDialog) {}
  openDialog(){}
}

