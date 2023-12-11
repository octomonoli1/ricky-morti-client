import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/Character';
import { CharacterService } from '../service/character.service';
import { Response } from '../model/Response';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  data: Character[] = []

  constructor (
    private characterService: CharacterService
  ){}

  ngOnInit(): void{
    this.characterService.getAllCharacters().subscribe(res => {
      const {info, results} = res;
      this.data = results;
    });
  }

}
