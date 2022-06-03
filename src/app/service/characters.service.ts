import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public baseUrl = "https://rickandmortyapi.com/api/character";

  constructor(private httpClient: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  public getPagesNumber(page: number): Observable<any> {
    const pages = this.baseUrl +  `?page=${page}`
    return this.httpClient.get(this.baseUrl)
  }

  public searchCharacters(name: string): Observable<any>{
    let uri = this.baseUrl + `?name=${name}`
    return this.httpClient.get(uri)
  }
}
