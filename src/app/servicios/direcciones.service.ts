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

   baseUrl: string = 'http://192.168.0.202:8080/direccion';


   getDirecciones() {
     return this.direcciones;
   }

  // getDirecciones() : Observable<Direccion[]> {
  //   return this.http.get<Direccion[]>(this.baseUrl);
  // }

  
  getDireccionById(idDireccion: number): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(this.baseUrl + idDireccion);
  }

  crearDireccion(direccion: Direccion): Observable<Direccion[]> {
    return this.http.post<Direccion[]>(this.baseUrl, direccion);
  }

  modificarDireccion(idDireccion: number, direccion: Direccion): Observable<Direccion[]> {
    return this.http.put<Direccion[]>(this.baseUrl + idDireccion, direccion);
  }

  borrarDireccion(idDireccion: number): Observable<Direccion[]> {
    return this.http.delete<Direccion[]>(this.baseUrl + idDireccion);
  }
}
