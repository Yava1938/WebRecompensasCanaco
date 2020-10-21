import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, NavbarComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
