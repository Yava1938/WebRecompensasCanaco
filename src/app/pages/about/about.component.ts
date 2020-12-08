import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img = 'https://psmnoticias.com/wp-content/uploads/2020/04/uv.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
