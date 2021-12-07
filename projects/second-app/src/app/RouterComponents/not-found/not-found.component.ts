import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p class="text-danger display-4">
      Page NotFound -404! 
    </p>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
