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
  user: any = {};
  objeto: any = {}
  constructor(private router: Router,
              private AuthService: AuthService) { 
                this.aut = AuthService; // Para acceder al metodo cerrar sesion
                this.user = AuthService.getUser(); //Para obtener los valores del usuario
                this.objeto = JSON.parse(this.user)
              }

  ngOnInit(): void {
  }

  buscarComercio( termino:string){
    console.log(termino);
    this.router.navigate( ['/buscar',termino]);

  }

}
