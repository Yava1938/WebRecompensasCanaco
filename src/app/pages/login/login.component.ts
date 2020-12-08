import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Admin } from 'src/app/models/Admin.model';
import { User } from 'src/app/models/User.model';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  forma :FormGroup
  User : User = new User();
  Admin : Admin = new Admin();
  error = '';
   
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService : AuthService) {
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
     this.User.email    = this.forma.value.usuario;
     this.User.password = this.forma.value.password;
         if (this.forma.invalid) {
      return Object.values( this.forma.controls ).forEach( control =>{
        control.markAsTouched();
      });
    }
    this.authService.singIn(this.User)
        .subscribe(
          res => {
            localStorage.setItem('token',res.data.access_token);
            let sesion = (res.data);
            localStorage.setItem('Admin',JSON.stringify(sesion));// aqui
            this.router.navigate(['/home']);
          },
          err => console.log(err)
          
        )


  }
  

}
