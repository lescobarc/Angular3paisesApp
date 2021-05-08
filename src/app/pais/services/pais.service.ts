import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ="https://restcountries.eu/rest/v2"

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<any>{
    const url = `${this.apiUrl}/name/${termino}`;
    console.log(url)
    return this.http.get( url );
  }


}
