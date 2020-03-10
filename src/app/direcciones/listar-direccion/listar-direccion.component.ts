import { Component, OnInit } from '@angular/core';
import {Direccion} from 'src/app/model/direccion';
import {DireccionesService} from "src/app/servicios/direcciones.service";
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-listar-direccion',
  templateUrl: './listar-direccion.component.html',
  styleUrls: ['./listar-direccion.component.css']
})
export class ListarDireccionComponent implements OnInit {
  direcciones: Array<Direccion>;
  idDireccion: number;

  formSearch: FormGroup;

  constructor(private direccionesService: DireccionesService) { }

  ngOnInit(): void {
    // this.direcciones = this.direccionesService.getDirecciones();} //comentar cuando funcione servidor
    
    this.listarDirecciones();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    });
    
  }
  listarDirecciones() {
    this.direccionesService.getDirecciones()
              // .subscribe((res:any)=>{
                  
              //     this.direcciones = res.direcciones;
              //   },(err:any)=>{
                 
              //     console.log(err);
              //   })
  }

  borrarDireccion(idDireccion) {
    this.direccionesService.borrarDireccion(idDireccion)
                // .subscribe((res:any)=>{
                   
                //     this.listarDirecciones();
                //   },(err:any)=>{
                //     console.log(err);
                   
                //   })
  }

}
