import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ComercioService } from '../../services/comercio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../../models/Admin.model';


@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent {

  respuesta = ''
  idAdmin: number
  infoAdmin: any[]=[]
  forma :FormGroup
  dataComercio : FormGroup
  admin = {
    nombre:'',
    apellido_paterno:'',
    apellido_materno:'',
    fecha_nacimiento:'',
    email:'',
    password:''
    //imagen_path: null
  }
  comercioData = {
    nombre:'',
    direccion:'',
    telefono:'',
    correo:'',
    contacto:'',
    rfc:'',
    expirancion_ticket:'',
    puntos_caducidad:'',
    imagen_path: null
  }

comercio:any = {}
idComercio : number;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private servicio: ComercioService) { 
    //Recibir los valores del comercio con el id del url
    this.route.params.subscribe( data =>{
      this.getComercio(data['id']);
      this.idComercio = data['id'];
    });
    this.crearFormulario();
    this.getAdmins();
  }
//Validaciones de cambios de los campos del formulario
  get nombreInvalido(){
    return this.forma.get('nameAdmin').invalid && this.forma.get('nameAdmin').touched
  }
  get paternoInvalido(){
    return this.forma.get('paternoAdmin').invalid && this.forma.get('paternoAdmin').touched
  }
  get maternoInvalido(){
    return this.forma.get('maternoAdmin').invalid && this.forma.get('maternoAdmin').touched
  }
  get fechaInvalido(){
    return this.forma.get('fechaAdmin').invalid && this.forma.get('fechaAdmin').touched
  }
  get correoInvalido(){
    return this.forma.get('correoAdmin').invalid && this.forma.get('correoAdmin').touched
  }
  get passwordInvalido(){
    return this.forma.get('contrasenaAdmin').invalid && this.forma.get('contrasenaAdmin').touched
  }
  //Validaciones de cambios de los campos del formulario Editar comercio
  get comercioInvalido(){
    return this.dataComercio.get('nameComercio').invalid && this.dataComercio.get('nameComercio').touched
  }
  get direccionComercioInvalido(){
    return this.dataComercio.get('direccionComercio').invalid && this.dataComercio.get('direccionComercio').touched
  }
  get telefonoComercioInvalido(){
    return this.dataComercio.get('telefonoComercio').invalid && this.dataComercio.get('telefonoComercio').touched
  }
  get correoComercioInvalido(){
    return this.dataComercio.get('correoComercio').invalid && this.dataComercio.get('correoComercio').touched
  }
  get contactoComercioInvalido(){
    return this.dataComercio.get('contactoComercio').invalid && this.dataComercio.get('contactoComercio').touched
  }
  get rfcInvalido(){
    return this.dataComercio.get('rfcComercio').invalid && this.dataComercio.get('rfcComercio').touched
  }
  get ticketInvalido(){
    return this.dataComercio.get('caducidadTicket').invalid && this.dataComercio.get('caducidadTicket').touched
  }
  get puntoInvalido(){
    return this.dataComercio.get('caducidadPuntos').invalid && this.dataComercio.get('caducidadPuntos').touched
  }
//Metodo para recibir informacion del comercio individual
getComercio(id:number){
  this.servicio.getComercio(id)
  .subscribe( comercio =>{
    console.log(comercio);
    this.comercio = comercio;
  })
}
//Metodo para crear formulario registro Admin comercio y formulario editar comercio
crearFormulario(){
  this.forma = this.fb.group({
    nameAdmin: ['', [Validators.required, Validators.minLength(5)]  ],
    paternoAdmin: ['', [Validators.required, Validators.minLength(5)]  ],
    maternoAdmin: ['', [Validators.required, Validators.minLength(5)]  ],
    fechaAdmin: ['', [Validators.required]  ],
    correoAdmin: ['', [Validators.required, Validators.email]  ],
    contrasenaAdmin: ['', [Validators.required, Validators.minLength(8)]  ],
  });

  this.dataComercio = this.fb.group({
    nameComercio: ['', [Validators.required, Validators.minLength(5)]  ],
    direccionComercio: ['', [Validators.required, Validators.minLength(10)]  ],
    telefonoComercio: ['', [Validators.required, Validators.minLength(10)]  ],
    correoComercio: ['', [Validators.required, Validators.email]  ],
    contactoComercio: ['', [Validators.required, Validators.minLength(8)]  ],
    rfcComercio: ['', [Validators.required, Validators.minLength(12)]  ],
    caducidadTicket: ['', [Validators.required]  ],
    caducidadPuntos: ['', [Validators.required]  ],
  });
}
//Metodo que asigna los valores del formulario a las variables antes de enviarlas
createAdmin(){
  this.admin.nombre = this.forma.value.nameAdmin;
  this.admin.apellido_paterno = this.forma.value.paternoAdmin;
  this.admin.apellido_materno = this.forma.value.maternoAdmin;
  this.admin.fecha_nacimiento = this.forma.value.fechaAdmin;
  this.admin.email = this.forma.value.correoAdmin;
  this.admin.password = this.forma.value.contrasenaAdmin;

console.log(this.admin);
this.servicio.createAdmin(this.idComercio, this.admin)
.subscribe(res => {
  res = console.log(res)
  this.router.navigate(['/home'])
},
err => console.log(err)
);
}
//Editar la informacion del comercio
editComercio(){
  this.comercioData.nombre = this.dataComercio.value.nameComercio;
  this.comercioData.direccion = this.dataComercio.value.direccionComercio;
  this.comercioData.telefono = this.dataComercio.value.telefonoComercio;
  this.comercioData.correo = this.dataComercio.value.correoComercio;
  this.comercioData.contacto = this.dataComercio.value.contactoComercio;
  this.comercioData.rfc = this.dataComercio.value.rfcComercio;
  this.comercioData.expirancion_ticket = this.dataComercio.value.caducidadTicket;
  this.comercioData.puntos_caducidad = this.dataComercio.value.caducidadPuntos

  Number(this.comercioData.expirancion_ticket);
  Number(this.comercioData.puntos_caducidad);

  console.log(this.comercioData);
  this.servicio.editarComercio(this.idComercio, this.comercioData)
.subscribe(res => {
  res = console.log(res)
  this.respuesta = 'Comercio actualizado exitosamente'
},
err => console.log(err)
);

}
//Eliminar comercio por medio del ID
eliminarComercio(){
  this.servicio.eliminarComercio(this.idComercio)
.subscribe(res => {
  res = console.log(res)
  this.router.navigate(['/home'])
},
err => console.log(err)
);
}
//Obtener informacion de los administradores del comercio
getAdmins(){
  this.servicio.getAdmins(this.idComercio)
    .subscribe( ( data: any) => {
      this.infoAdmin = data;
      console.log(this.infoAdmin);
    }); 
  }
  getId(admin){
    this.idAdmin = admin['id'];
  }

  eliminarAdmin(){
    this.servicio.eliminarAdmin(this.idAdmin)
  .subscribe(res => {
    res = console.log(res)
    console.log('Administrador eliminado con exito')
    this.router.navigate(['/home'])
  },
  err => console.log(err)
  );
  }

  editarAdmin(){
    this.admin.nombre = this.forma.value.nameAdmin;
  this.admin.apellido_paterno = this.forma.value.paternoAdmin;
  this.admin.apellido_materno = this.forma.value.maternoAdmin;
  this.admin.fecha_nacimiento = this.forma.value.fechaAdmin;
  this.admin.email = this.forma.value.correoAdmin;
  this.admin.password = this.forma.value.contrasenaAdmin;

console.log(this.admin);
this.servicio.editarAdmin(this.idAdmin ,this.admin)
.subscribe(res => {
  res = console.log(res)
  this.router.navigate(['/home'])
},
err => console.log(err)
);
  }

}


