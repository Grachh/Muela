import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrarDireccionComponent } from './direcciones/borrar-direccion/borrar-direccion.component';
import { CrearDireccionComponent } from './direcciones/crear-direccion/crear-direccion.component';
import { EditarDireccionComponent } from './direcciones/editar-direccion/editar-direccion.component';
import { ListarDireccionComponent } from './direcciones/listar-direccion/listar-direccion.component';
import { BorrarEmpresaComponent } from './empresas/borrar-empresa/borrar-empresa.component';
import { CrearEmpresaComponent } from './empresas/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { ListarEmpresaComponent } from './empresas/listar-empresa/listar-empresa.component';
import { BorrarEtiquetaComponent } from './etiquetas/borrar-etiqueta/borrar-etiqueta.component';
import { CrearEtiquetaComponent } from './etiquetas/crear-etiqueta/crear-etiqueta.component';
import { EditarEtiquetaComponent } from './etiquetas/editar-etiqueta/editar-etiqueta.component';
import { EtiquetaEnvioComponent } from './etiquetas/etiqueta-envio/etiqueta-envio.component';
import { FormatoEtiquetaComponent } from './etiquetas/formato-etiqueta/formato-etiqueta.component';
import { ListarEtiquetaComponent } from './etiquetas/listar-etiqueta/listar-etiqueta.component';
import { PaginadoEtiquetaComponent } from './etiquetas/paginado-etiqueta/paginado-etiqueta.component';
import { GenerarEtiquetaComponent } from './generar-etiqueta/generar-etiqueta.component';
import { BorrarProductoComponent } from './productos/borrar-producto/borrar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './productos/listar-producto/listar-producto.component';
import { InicioComponent } from './inicio/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrarDireccionComponent,
    CrearDireccionComponent,
    EditarDireccionComponent,
    ListarDireccionComponent,
    BorrarEmpresaComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    ListarEmpresaComponent,
    BorrarEtiquetaComponent,
    CrearEtiquetaComponent,
    EditarEtiquetaComponent,
    EtiquetaEnvioComponent,
    FormatoEtiquetaComponent,
    ListarEtiquetaComponent,
    PaginadoEtiquetaComponent,
    GenerarEtiquetaComponent,
    BorrarProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
