import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComercioService } from '../../services/comercio.service';

@Component({
  selector: 'app-registro-comercio',
  templateUrl: './registro-comercio.component.html',
  styleUrls: ['./registro-comercio.component.css']
})
export class RegistroComercioComponent  {

  forma :FormGroup
  comercio = {
    nombre:'',
    direccion:'',
    telefono:'',
    correo:'',
    contacto:'',
    rfc:'',
    expirancion_ticket:'',
    puntos_caducidad: '',
    //imagen_path: null
  }
  
  error = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private comercioService : ComercioService) { 
      this.crearFormulario();
    }


  get comercioInvalido(){
    return this.forma.get('nameComercio').invalid && this.forma.get('nameComercio').touched
  }
  get direccionInvalido(){
    return this.forma.get('direccionComercio').invalid && this.forma.get('direccionComercio').touched
  }
  get telefonoInvalido(){
    return this.forma.get('telefonoComercio').invalid && this.forma.get('telefonoComercio').touched
  }
  get correoInvalido(){
    return this.forma.get('correoComercio').invalid && this.forma.get('correoComercio').touched
  }
  get responsableInvalido(){
    return this.forma.get('responsableComercio').invalid && this.forma.get('responsableComercio').touched
  }
  get rfcInvalido(){
    return this.forma.get('rfcComercio').invalid && this.forma.get('rfcComercio').touched
  }
  get vigtickInvalido(){
    return this.forma.get('vigtickComercio').invalid && this.forma.get('vigtickComercio').touched
  }
  get vigpunInvalido(){
    return this.forma.get('vigpunComercio').invalid && this.forma.get('vigpunComercio').touched
  }
  crearFormulario(){
    this.forma = this.fb.group({
      nameComercio: ['', [Validators.required, Validators.minLength(5)]  ],
      direccionComercio: ['', [Validators.required, Validators.minLength(10)]  ],
      telefonoComercio: ['', [Validators.required, Validators.minLength(10)]  ],
      correoComercio: ['', [Validators.required, Validators.email]  ],
      responsableComercio: ['', [Validators.required, Validators.minLength(8)]  ],
      rfcComercio: ['', [Validators.required, Validators.minLength(12)]  ],
      vigtickComercio: ['', [Validators.required]  ],
      vigpunComercio: ['', [Validators.required]  ],
    });
  }
  
  createComercio(){
    //this.comercio.nombre = this.forma.value.
    this.comercio.contacto = this.forma.value.responsableComercio;
    this.comercio.correo = this.forma.value.correoComercio;
    this.comercio.direccion = this.forma.value.direccionComercio;
    this.comercio.expirancion_ticket = this.forma.value.vigtickComercio;
    this.comercio.nombre = this.forma.value.nameComercio;
    this.comercio.puntos_caducidad = this.forma.value.vigpunComercio;
    this.comercio.rfc = this.forma.value.rfcComercio;
    this.comercio.telefono = this.forma.value.telefonoComercio;
    
    Number(this.comercio.expirancion_ticket)
    Number(this.comercio.puntos_caducidad)
  console.log(this.comercio);
  this.comercioService.createComercio(this.comercio)
  .subscribe(res => {
    res = console.log(res)
    this.router.navigate(['/home'])
  },
  err => console.log(err)
  );
  }

}
 