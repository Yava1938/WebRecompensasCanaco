import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma :FormGroup
  userReq: string;
  pass: string;
   
  constructor(private fb: FormBuilder,
              private router: Router) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }
  get usuarioNoValido(){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }

  get contrasenaNoValido(){
    return this.forma.get('password').invalid && this.forma.get('password').touched
  }
  crearFormulario(){
    this.forma = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]  ],
      password: ['', [Validators.required, Validators.minLength(6)]  ],
    });
  }

  onLogin(){
     this.userReq = this.forma.value.usuario;
     this.pass    = this.forma.value.password;
     console.log(this.userReq + this.pass);

    if (this.forma.invalid) {
      return Object.values( this.forma.controls ).forEach( control =>{
        control.markAsTouched();
      });
    }
  }
  

}
