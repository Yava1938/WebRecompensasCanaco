import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  info: any = {}

private URL:string = 'http://canaco.demos.mx/api/auth/login';

  constructor(private http: HttpClient,
              private router: Router) {
   }

   singIn(User){
     return this.http.post<any>(this.URL, User);
   }

   loggedIn(): Boolean{
     return !!localStorage.getItem('token');
   }

   getToken(){
     return localStorage.getItem('token');
   }

   logOut(){
     localStorage.removeItem('token');
     localStorage.removeItem('Admin');
     this.router.navigate(['/login']);
   }

   getUser(){
     this.info =  localStorage.getItem('Admin');
     return this.info;
   }
}
