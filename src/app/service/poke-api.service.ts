import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  grabPoke(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${query.toLowerCase()}`)
      .pipe(
        catchError((error: any) => {
          if (error.status === 404) {
            alert('Please make sure the Pokémon name or ID is typed correctly.');
          }
          return throwError(error);
        })
      );
  }
}
