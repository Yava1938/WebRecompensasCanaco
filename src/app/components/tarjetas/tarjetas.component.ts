import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {
  
  @Input() items: any [] = [];
  
   
  constructor( private router: Router) {}

  verComercio(item: any){
    let IdComercio = item.id;
    this.router.navigate(['/comercio', IdComercio])
  }

   }

  


