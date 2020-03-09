import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';

import { EditarDireccionComponent } from './direcciones/editar-direccion/editar-direccion.component';
import { CrearDireccionComponent } from './direcciones/crear-direccion/crear-direccion.component';
import { ListarDireccionComponent } from './direcciones/listar-direccion/listar-direccion.component';
import { BorrarDireccionComponent } from './direcciones/borrar-direccion/borrar-direccion.component';

import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './empresas/listar-empresa/listar-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { BorrarEmpresaComponent } from './empresas/borrar-empresa/borrar-empresa.component';

import { CrearEtiquetaComponent } from './etiquetas/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiquetas/editar-etiqueta/editar-etiqueta.component';
import { ListarEtiquetaComponent } from './etiquetas/listar-etiqueta/listar-etiqueta.component';
import { BorrarEtiquetaComponent } from './etiquetas/borrar-etiqueta/borrar-etiqueta.component';
import { FormatoEtiquetaComponent } from './etiquetas/formato-etiqueta/formato-etiqueta.component';

import { BorrarProductoComponent } from './productos/borrar-producto/borrar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';

import { from } from 'rxjs';


const routes: Routes = [
  {path: "", component:InicioComponent},
  
  {path:"direcciones/borrar-direccion", component:BorrarDireccionComponent},
  {path:"direcciones/crear-direccion", component:CrearDireccionComponent},
  {path:"direcciones/editar-direccion", component:EditarDireccionComponent},
  {path:"direcciones/listar-direccion", component:ListarDireccionComponent},
  

  {path:"empresas/borrar-empresa", component:BorrarEmpresaComponent},
  {path:"empresas/crear-empresa", component:CrearEmpresaComponent},
  {path:"empresas/editar-empresa", component:EditarEmpresaComponent},
  {path:"empresas/listar-empresa", component:ListarEmpresaComponent},
  
  {path:"etiquetas/borrar-etiqueta", component:BorrarEtiquetaComponent},
  {path:"etiquetas/crear--etiqueta", component:CrearEtiquetaComponent},
  {path:"etiquetas/editar-etiqueta", component:EditarEtiquetaComponent},
  {path:"etiquetas/formato-etiqueta", component:FormatoEtiquetaComponent},  
  {path:"etiquetas/listar-etiqueta", component:ListarEtiquetaComponent},
  
  {path:"direcciones/borrar-direccion", component:BorrarDireccionComponent},
  {path:"direcciones/crear-direccion", component:CrearDireccionComponent},
  {path:"direcciones/editar-direccion", component:EditarDireccionComponent},
  {path:"direcciones/listar-direccion", component:ListarDireccionComponent},

  {path:"productos/borrar-producto", component:BorrarProductoComponent},
  {path:"productos/crear-producto", component:CrearProductoComponent},
  {path:"productos/editar-producto", component:EditarProductoComponent},
  {path:"productos/listar-producto", component:ListarProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
