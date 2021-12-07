import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likesdemo',
  templateUrl: './likesdemo.component.html',
  styleUrls: ['./likesdemo.component.css']
})
export class LikesdemoComponent implements OnInit {

  constructor() { }
  Products = [
    {Name: 'JBL Speaker', Photo: 'assets/jbl.jpg', Likes: 0, Dislikes:0},
    {Name: 'Nike Casuals', Photo: 'assets/jeans.jpg', Likes: 0, Dislikes:0},
    {Name: 'Shirt', Photo: 'assets/shirt.webp', Likes: 0, Dislikes: 0},
    ];

    onClickLike(item: any){
      item.Likes++;
    }

    onClickDislikes(item: any){
      item.Dislikes++;
    }

  ngOnInit(): void {
  }

}
