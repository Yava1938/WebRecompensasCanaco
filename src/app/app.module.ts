import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarHomeComponent } from "./components/shared/navbar-home/navbar.home.component";

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComercioComponent } from './pages/registro-comercio/registro-comercio.component';
import { EditarComercioComponent } from './pages/editar-comercio/editar-comercio.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    RegistroComercioComponent,
    EditarComercioComponent,
    ReporteComponent,
    AboutComponent,
    NavbarHomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
