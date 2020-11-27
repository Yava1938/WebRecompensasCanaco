import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    User: new FormControl(''),
    Password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('Form->', this.loginForm.value);
  }

}
