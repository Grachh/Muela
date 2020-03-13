import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Direccion} from "../model/direccion"
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  direcciones= [
    {idDireccion: 1, direccion: "Direccion 1", codigoPostal: "CP1", destino: "Destino1"},
    {idDireccion: 2, direccion: "Direccion 2", codigoPostal: "CP2", destino: "Destino2"},
    {idDireccion: 3, direccion: "Direccion 3", codigoPostal: "CP3", destino: "Destino3"},
    {idDireccion: 4, direccion: "Direccion 4", codigoPostal: "CP4", destino: "Destino4"},
   

  ]

  idDireccion: number;
    direccion: any;
    codigoPostal: string;
    destino: string;

  constructor(private http: HttpClient) {  
   }

   baseUrl: string = 'assets/direcciones.json';

   getDirecciones() {
     return this.direcciones;
   }

  // getDirecciones() : Observable<Direccion[]> {
  //   return this.http.get<Direccion[]>(this.baseUrl);
  // }

  //  getDirecciones() : Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }
  
  getDireccionById(idDireccion: number): Observable<any> {
    return this.http.get(this.baseUrl + idDireccion);
  }

  crearDireccion(direccion: Direccion): Observable<Direccion[]> {
    return this.http.post<Direccion[]>(this.baseUrl, direccion);
  }
  
  //  crearDireccion(direccion: Direccion): Observable<any> {
  //   return this.http.post(this.baseUrl, direccion);
  // }
  
  

  // modificarDireccion(idDireccion: number, direccion: Direccion): Observable<Direccion[]> {
  //   return this.http.put<Direccion[]>(this.baseUrl + idDireccion, direccion);
  // }
  modificarDireccion(idDireccion: number, direccion: Direccion): Observable<any> {
    return this.http.put(this.baseUrl + idDireccion, direccion);
  }


  

  // borrarDireccion(idDireccion: number): Observable<Direccion[]> {
  //   return this.http.delete<Direccion[]>(this.baseUrl + idDireccion);
  // }

  
  

  borrarDireccion(idDireccion: number): Observable<any> {
    return this.http.delete(this.baseUrl + idDireccion);
  }
}
