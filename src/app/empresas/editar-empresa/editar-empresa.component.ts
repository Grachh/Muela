import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {EmpresasService} from "../../servicios/empresas.service"
import { Empresa} from "../../model/empresa"
import {DireccionesService} from "../../servicios/direcciones.service"
import { Direccion} from "../../model/direccion"
import { Router, ActivatedRoute} from '@angular/router'; 
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {
  
  formEmpresa: FormGroup;
  idEmpresa: number;
  empresa: any;
  direcciones: Array<Direccion>;

  constructor(
    private empresasService: EmpresasService,
    private router: Router,
    private route: ActivatedRoute,
    private mensajesService: MensajesService,
    private direccionesService: DireccionesService,
    private ff:  FormBuilder
  ) { }

  ngOnInit(): void {
     this.empresa = this.empresasService.getEmpresas(); //comentar cuando este activo el servidor
     
     this.empresasService.getEmpresaById(this.idEmpresa)

     
     this.idEmpresa = this.route.snapshot.params.idEmpresa;
     
    this.formEmpresa = new FormGroup({
      nombreEmpresa: new FormControl(""),
      idDireccion: new FormControl("")
    })
    this.direcciones = this.direccionesService.getDirecciones();
        
    this.empresasService.getEmpresaById(this.idEmpresa)
                        // .subscribe((res:any)=>{
                        //   this.empresa = res.empresa;
                        //   this.formEmpresa.get('nombreEmpresa').value,
                        //   this.formEmpresa.get('idDireccion').value
                        // }, (err:any)=>{this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning')})

                         
  }
  modificarEmpresa(){
        
    this.empresasService.modificarEmpresa(this.idEmpresa, this.formEmpresa.value)
//               .subscribe((res:any)=>{
//                 this.mensajesService.setMensaje(res.mensaje, 'Empresa modificada correctamente')
//               this.router.navigate(['empresas']);
//               },(err:any)=>{ this.mensajesService.setMensaje('Error de conexión con los servidores, inténtelo más tarde', 'warning');      
//  });
  }

  limpiarCampos(){
    this.formEmpresa = this.ff.group({
      nombreEmpresa: '',
      idDireccion: ''
     
    })};

}
