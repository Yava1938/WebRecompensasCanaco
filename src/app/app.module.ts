//Imports Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Imports Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarHomeComponent } from "./components/shared/navbar-home/navbar.home.component";
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComercioComponent } from './pages/registro-comercio/registro-comercio.component';
import { EditarComercioComponent } from './pages/editar-comercio/editar-comercio.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

//Imports Guards
import { AuthGuard } from "../app/guards/auth.guard";

//Imports Services
import { TokenService } from './services/token.service';

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
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
