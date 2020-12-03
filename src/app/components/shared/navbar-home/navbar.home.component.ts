import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar.home.component.html',
  styleUrls: ['./navbar.home.component.css']
})
export class NavbarHomeComponent implements OnInit {


  aut : any;
  img = 'https://lh3.googleusercontent.com/proxy/mEVq30VUd4vCFkbhvwDPeEVuiq9AEMrW30TvRNaodzi5QBThYQG_3ke8CRbEUssTi1Aa7-XOxHcowWLPQ_uKT0zrAJGjPVI8_qmCvBISycSFdlW9hlLT3T2ZiZQ';
  constructor(private router: Router,
              private AuthService: AuthService) { 
                this.aut = AuthService;
              }

  ngOnInit(): void {
  }

  buscarComercio( termino:string){
    console.log(termino);
    this.router.navigate( ['/buscar',termino]);

  }

}
