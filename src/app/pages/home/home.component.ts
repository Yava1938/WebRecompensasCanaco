import { Component } from '@angular/core';
import { ComercioService } from '../../services/comercio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  tarjetas :any[] = []
  
  
  constructor( private comer: ComercioService) {
    this.comer.getComercios()
    .subscribe( ( data: any) => {
      this.tarjetas = data;
    }); 
  }

}
