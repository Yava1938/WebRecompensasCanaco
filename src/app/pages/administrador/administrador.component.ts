import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  infoAdmin: any = {}
  constructor(private servicio: ComercioService,
              private route : ActivatedRoute) {
                this.route.params.subscribe( data =>{
                  this.getAdmin(data['id']);
                });
                
   }

  ngOnInit(): void {
  }

  getAdmin(id: number){
    this.servicio.getAdmin(id)
    .subscribe( data =>{
      this.infoAdmin = data;
    })
  }

}
