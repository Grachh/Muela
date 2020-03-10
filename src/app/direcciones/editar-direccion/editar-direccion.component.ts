import { Component, OnInit } from '@angular/core';
import {Direccion} from 'src/app/model/direccion';
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router'; 
import { MensajesService } from 'src/app/servicios/mensajes.service';


@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.css']
})
export class EditarDireccionComponent implements OnInit {

  formDireccion: FormGroup;
  idDireccion: number;
  direccion: any;

  constructor(
    private direccionesService: DireccionesService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private ff:  FormBuilder
  ) { 
     
  }

  ngOnInit(): void {
    this.idDireccion = this.route.snapshot.params.idDireccion;
    this.formDireccion = new FormGroup({
      direccion: new FormControl(""),
      codigoPostal: new FormControl(""),
      destino: new FormControl("")
     })

     this.direccionesService.getDireccionById(this.idDireccion)
     .subscribe((res:any)=>{
       this.direccion = res.direccion;
       this.formDireccion.get('direccion').value,
       this.formDireccion.get('codigoPostal').value,
       this.formDireccion.get('destino').value
     }, (err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning')})



    }

    modificarDireccion(){
        
      this.direccionesService.modificarDireccion(this.idDireccion, this.formDireccion.value)
                .subscribe((res:any)=>{
                  this.mensajesService.setMensaje(res.mensaje, 'Dirección modificada correctamente')
                this.router.navigate(['listar-direccion']);
                },(err:any)=>{ this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');      
   });
    }

    limpiarCampos(){
      this.formDireccion = this.ff.group({
        direccion: '',
       codigoPostal: '',
       destino: ''
      })}
      
  }