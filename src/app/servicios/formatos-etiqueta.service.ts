import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormatoEtiqueta} from "../model/formato-etiqueta"
import {Observable} from "rxjs/index"

@Injectable({
  providedIn: 'root'
})
export class FormatosEtiquetaService {
  formatosEtiqueta= [
    {idFormato:1, nombreFormato: "formato1", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: false},
    {idFormato:2, nombreFormato: "formato2", codCliente: true, codClienteExtendido: true, codBarras: true, ean: true, direccion1: true, direccion2: false},
    {idFormato:3, nombreFormato: "formato3", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: true},
    {idFormato:4, nombreFormato: "formato4", codCliente: true, codClienteExtendido: false, codBarras: true, ean: true, direccion1: true, direccion2: false},
  ]

  constructor(private http: HttpClient) { }
  getFormatos() {
    return this.formatosEtiqueta;
  }
}
