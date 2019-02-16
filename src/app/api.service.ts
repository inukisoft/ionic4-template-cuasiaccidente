import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Area } from './area';
import { Equipo } from './equipo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://elorigendelaespecie.com/api/v1/products";
const apiAreaUrl = "http://elorigendelaespecie.com/api/v1/areas";
const apiEquipoUrl = "http://elorigendelaespecie.com/api/v1/equipos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {

  		//TODO: send the error to remote logging infraestructure
  		console.error(error);

  		// let the app keep running by returning an empty result
  		return of(result as T);
  	}
  }


  getAreas (): Observable<Area[]> {
    return this.http.get<Area[]>(apiAreaUrl)
      .pipe(
        tap(areas => console.log('fetched area')),
        catchError(this.handleError('getAreas', []))
      );
  }

  getEquipos (): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(apiEquipoUrl)
      .pipe(
        tap(equipos => console.log('fetched equipo')),
        catchError(this.handleError('getEquipo', []))
      );
  }  

}
