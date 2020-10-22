import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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