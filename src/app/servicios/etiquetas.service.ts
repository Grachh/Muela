import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiqueta} from "../model/etiqueta"
import {Observable} from "rxjs/index"

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {
  etiquetas=[
    {idEtiqueta: 1, filas: 4, columnas: 5, idFormato: 1},
    {idEtiqueta: 2, filas: 4, columnas: 5, idFormato: 2},
    {idEtiqueta: 3, filas: 6, columnas: 5, idFormato: 2},
    {idEtiqueta: 4, filas: 2, columnas: 5, idFormato: 3},
    {idEtiqueta: 5, filas: 4, columnas: 5, idFormato: 1},
  ]

  constructor(private http: HttpClient) { }
  getEtiquetas() {
    return this.etiquetas;
  }
}
