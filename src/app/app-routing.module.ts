//Import Modulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Components
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EditarComercioComponent } from './pages/editar-comercio/editar-comercio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComercioComponent } from './pages/registro-comercio/registro-comercio.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { ComercioComponent } from "./pages/comercio/comercio.component";



//Import Guards
import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'editar-comercio', component: EditarComercioComponent, canActivate: [AuthGuard] },
  { path: 'comercio/:id', component: ComercioComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'registrar-comercio', component: RegistroComercioComponent, canActivate: [AuthGuard] },
  { path: 'reporte', component: ReporteComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
