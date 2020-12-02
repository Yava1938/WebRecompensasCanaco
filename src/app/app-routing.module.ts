import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EditarComercioComponent } from './pages/editar-comercio/editar-comercio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComercioComponent } from './pages/registro-comercio/registro-comercio.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'editar-comercio', component: EditarComercioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'registrar-comercio', component: RegistroComercioComponent },
  { path: 'reporte', component: ReporteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
