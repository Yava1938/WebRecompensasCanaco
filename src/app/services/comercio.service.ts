import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private URL = 'http://canaco.demos.mx/api/comercios'
  private URLAdmins = 'http://canaco.demos.mx/api/admins/'

  constructor(private http: HttpClient) { 

  }

  //Metodo para Crear comercio
  createComercio(comercio: any){
    return this.http.post<any>(this.URL, comercio);
  }
  //Metodo para editar comercio
  editarComercio(id : number, comercio:any){
    return this.http.patch<any>(this.URL + `/${id}`, comercio);
  }
  //Metodo para listar comercios 
  getComercios(){
    return this.http.get(this.URL)
    .pipe( map (data => data['data']));
  }
 //Metodo para recuperar comercio individual
  getComercio(id: number){
    return this.http.get(this.URL + `/${id}`)
    .pipe( map (data => data['data'].attributes));
  }
  eliminarComercio(id: number){
    return this.http.delete<any>(this.URL + `/${id}`);
  }
  //Metodo para crear administrador de comercio
  createAdmin(id: number, Admin:any){
    return this.http.post<any>(this.URL+ `/${id}`+ '/admins', Admin );
  }
  editarAdmin(id: number, Admin:any){
    return this.http.patch<any>(this.URLAdmins+ `${id}`, Admin );
  }
  getAdmin(id: number){
    return this.http.get<any>(this.URLAdmins+ `${id}`)
    .pipe( map (data => data['data'].attributes));
  }
  getAdmins(id:number){
    return this.http.get<any>(this.URL+ `/${id}`+ '/admins')
    .pipe( map (data => data['data']));
  }
  eliminarAdmin(id: number){
    return this.http.delete<any>(this.URLAdmins + `${id}`);
  }
}
