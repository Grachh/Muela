import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa} from "../model/empresa"
import { Direccion} from "../model/direccion"
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresas= [
    {idEmpresa: 1, nombreEmpresa: "Empresa1", idDireccion:1},
    {idEmpresa: 2, nombreEmpresa: "Empresa2", idDireccion:2},
    {idEmpresa: 3, nombreEmpresa: "Empresa3", idDireccion:3},
    {idEmpresa: 4, nombreEmpresa: "Empresa4", idDireccion:1},
    {idEmpresa: 5, nombreEmpresa: "Empresa5", idDireccion:1},
    {idEmpresa: 6, nombreEmpresa: "Empresa6", idDireccion:2}

  ]
  empresa: any;
  idEmpresa: number;
  nombreEMpresa: string;
  idDireccion: number;
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://192.168.0.202:8080/ControladorEmpresa';

  
getEmpresas(){
  return this.empresas;
}
  // getEmpresas() : Observable<Empresa[]> {
  //   return this.http.get<Empresa[]>(this.baseUrl);
  // }
  
getEmpresaById(idEmpresa: number){
  this.empresas.forEach(empresa=>{
    if (this.empresa.idEmpresa= idEmpresa)
    return this.empresa;
})}
  // getEmpresaById(idEmpresa: number): Observable<Empresa[]> {
  //   return this.http.get<Empresa[]>(this.baseUrl + idEmpresa);
  // }

  crearEmpresa(empresa: Empresa): Observable<Empresa[]> {
    return this.http.post<Empresa[]>(this.baseUrl, empresa);
  }

  modificarEmpresa(idEmpresa: number, empresa: Empresa): Observable<Empresa[]> {
    return this.http.put<Empresa[]>(this.baseUrl + idEmpresa, empresa);
  }



 borrarEmpresa(idEmpresa: number): Observable<Empresa[]> {
  return this.http.delete<Empresa[]>(this.baseUrl + idEmpresa);
  }
}
