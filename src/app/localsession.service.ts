import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalsessionService {
  
  rut: string;
  area: number;
  equipo: number;
  fechacuasi: Date; 
  describa: string;
  accion: number; 
  informo: number;
  tipotrabajador: string = "13635509-0"; 


  constructor() { }
}
