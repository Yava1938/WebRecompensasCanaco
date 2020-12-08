import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

   auth : any = {}
   obj  : any = {}

  constructor(private router: Router,
    private AuthService: AuthService) {
                this.auth = AuthService.getUser(); // Para acceder al metodo cerrar sesion
                this.obj = JSON.parse(this.auth);
     }

  ngOnInit(): void {
  }

  

}
