import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar.home.component.html',
  styleUrls: ['./navbar.home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarComercio( termino:string){
    console.log(termino);
    this.router.navigate( ['/buscar',termino]);

  }

}
