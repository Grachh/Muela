import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { ListarEmpresaComponent } from './empresas/listar-empresa/listar-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';

import { CrearProductoComponent } from '../app/productos/crear-producto/crear-producto.component';
import { ListarProductoComponent } from '../app/productos/listar-producto/listar-producto.component';
import { EditarProductoComponent } from '../app/productos/editar-producto/editar-producto.component';

import { EditarDireccionComponent } from './direcciones/editar-direccion/editar-direccion.component';
import { CrearDireccionComponent } from './direcciones/crear-direccion/crear-direccion.component';
import { ListarDireccionComponent } from './direcciones/listar-direccion/listar-direccion.component';
import { ListarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/listar-formato-etiqueta/listar-formato-etiqueta.component';
import { GenerarEtiquetasComponent } from './generar-etiquetas/generar-etiquetas.component';
import { CrearFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/crear-formato-etiqueta/crear-formato-etiqueta.component';
import { EditarFormatoEtiquetaComponent } from './etiquetas/formatoEtiqueta/editar-formato-etiqueta/editar-formato-etiqueta.component';
import { ListarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/listar-etiqueta/listar-etiqueta.component';
import { CrearEtiquetaComponent } from './etiquetas/paginadoEtiqueta/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiquetas/paginadoEtiqueta/editar-etiqueta/editar-etiqueta.component';


const routes: Routes = [
  {path: "", component:InicioComponent},
  {path: "empresas/listar-empresa", component:ListarEmpresaComponent},
  {path:"empresas/crear-empresa", component:CrearEmpresaComponent},
  {path:"empresas/editar-empresa/:idEmpresa", component:EditarEmpresaComponent},

  {path: "direcciones/listar-direccion", component:ListarDireccionComponent},
  {path:"direcciones/crear-direccion", component:CrearDireccionComponent},
  {path:"direcciones/editar-direccion", component:EditarDireccionComponent},

  {path: "productos/listar-producto", component:ListarProductoComponent},
  {path:"productos/crear-producto", component:CrearProductoComponent},
  {path:"productos/editar-producto", component:EditarProductoComponent},


  {path:"etiquetas/formatoEtiqueta/listar-formato-etiqueta", component:ListarFormatoEtiquetaComponent},
  {path:"etiquetas/formatoEtiqueta/crear-formato-etiqueta", component:CrearFormatoEtiquetaComponent},
  {path:"etiquetas/formatoEtiqueta/editar-formato-etiqueta", component:EditarFormatoEtiquetaComponent},
  {path:"etiquetas/paginadoEtiqueta/listar-etiqueta", component:ListarEtiquetaComponent},
  {path:"etiquetas/paginadoEtiqueta/crear-etiqueta", component:CrearEtiquetaComponent},
  {path:"etiquetas/paginadoEtiqueta/editar-etiqueta", component:EditarEtiquetaComponent},
  {path:"generar-etiquetas", component:GenerarEtiquetasComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // if path=!""(),  intento de ignorar app-inicio
 }
