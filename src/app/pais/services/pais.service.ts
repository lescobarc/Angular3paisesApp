import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ="https://restcountries.eu/rest/v2"

  get httpParams () {
    return new HttpParams()
      .set( 'fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    console.log(url)
    return this.http.get<Country[]>( url, {params: this.httpParams } );
  }
  buscarCapital( termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    console.log(url)
    return this.http.get<Country[]>( url, {params: this.httpParams } );
  }
  getPaisPorAlpha( id: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    console.log(url)
    return this.http.get<Country[]>( url );
  }
  buscarRegion( region: string): Observable<Country[]>{

    

      //`${this.apiUrl}/region/${region}?fields=name;capital;alpha2code;flag;population`;

    const url = `${this.apiUrl}/region/${region}`;
    console.log(url)
    return this.http.get<Country[]>( url, {params: this.httpParams } )
      .pipe(
        tap(console.log)
      )
  }




}
