import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img = 'https://lh3.googleusercontent.com/proxy/mEVq30VUd4vCFkbhvwDPeEVuiq9AEMrW30TvRNaodzi5QBThYQG_3ke8CRbEUssTi1Aa7-XOxHcowWLPQ_uKT0zrAJGjPVI8_qmCvBISycSFdlW9hlLT3T2ZiZQ';
  constructor() { }

  ngOnInit(): void {  
  }

}
