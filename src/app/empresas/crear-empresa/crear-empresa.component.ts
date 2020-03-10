import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import {DireccionesService} from "../../servicios/direcciones.service"
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Direccion} from "../../model/direccion";
import { Empresa} from "../../model/empresa";
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  formEmpresa: FormGroup;
  direcciones: Array<Direccion>;
  idDireccion: number;
  empresa: Empresa;

  constructor(
    private empresaService: EmpresasService,
    private direccionesService: DireccionesService,
    private router: Router,
    private mensajesService: MensajesService, 
    private ff:  FormBuilder
    ){}

  ngOnInit() {
   
    this.formEmpresa = new FormGroup({
      nombreEmpresa: new FormControl(''),
      idDireccion: new FormControl(''),
     
     })
     
     this.direcciones = this.direccionesService.getDirecciones();
  }


  crearEmpresa() {
   
    let  empresa = {
      nombreEmpresa: this.formEmpresa.get('nombreEmpresa').value,
      idDireccion: this.formEmpresa.get('idDireccion').value

    }
    localStorage.setItem("empresa", JSON.stringify(empresa)); //Comentar cuando esté activo
       
      // this.formEmpresa.get('idDireccion').value,
    

    this.empresaService.crearEmpresa(this.formEmpresa.value)
    .subscribe((res:any)=>{
        this.mensajesService.setMensaje(res.mensaje, 'Empresa añadida correctamente');
         this.router.navigate(["/listar-empresa"]);
    },(err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');
        
    });
}
limpiarCampos(){
  this.formEmpresa = new FormGroup({
    nombreEmpresa: new FormControl(''),
    idDireccion: new FormControl(''),
   
   })
}
}
