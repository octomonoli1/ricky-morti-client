import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/Character';
import { Response } from '../model/Response';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private getAllUrl = 'https://rickandmortyapi.com/api/character';
  private getCharacterUrl = 'https://rickandmortyapi.com/api/character/1';

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(){
    return this.http.get<Response>(this.getAllUrl);
  }
}
