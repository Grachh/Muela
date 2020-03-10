import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';
import {Empresa} from 'src/app/model/empresa';
import {EmpresasService} from "src/app/servicios/empresas.service";
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {
  empresas: any;
  empresa: any;
  direccion: any;
  direccionEmpresa:String;
  

  formSearch: FormGroup;


  constructor(private empresasService: EmpresasService, 
    private direccionesService: DireccionesService) { }

  ngOnInit()  { 
    this.empresas = this.empresasService.getEmpresas();
    //this.getNombreDireccion(this.empresa);
    //  this.listarEmpresas();
    // this.formSearch = new FormGroup({
    //   search: new FormControl('')
    // });
    
  }
  getNombreDireccion(empresa){//comprobar que funciona
   
    
   this.direccion = this.direccionesService.getDireccionById(empresa.idDireccion)
   this.direccionEmpresa = this.direccion.direccion;
    return this.direccionEmpresa;
    
  }
 
  // listarEmpresas() {
  // //   this.empresasService.getEmpresas()
  // //             .subscribe((res:any)=>{
                  
  // //                 this.empresas = res.empresas;
  // //               },(err:any)=>{
                 
  // //                 console.log(err);
  // //               })
  // // }

  borrarEmpresa(idEmpresa) {
    this.empresasService.borrarEmpresa(idEmpresa)
                // .subscribe((res:any)=>{
                   
                //     this.listarEmpresas();
                //   },(err:any)=>{
                //     console.log(err);
                   
                //   })
  }}
