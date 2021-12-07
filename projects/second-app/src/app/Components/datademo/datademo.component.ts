import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../Services/apidata.service';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent implements OnInit {

  constructor(private data:ApidataService) { }

  products:any []=[];

  ngOnInit() {
    this.data.GetProducts().subscribe(product => this.products = product);
  }

  onSubmit(data:any){
    this.data.AddProducts(data).subscribe(error => console.log("sumthing wrong"));
    alert('record inserted');
    location.reload();
  }

  onDelete(data:any){
    this.data.DeleteProducts(data.id).subscribe( ()=>{
      this.products; 
    });
  }

  onEdit(){

  }

}
