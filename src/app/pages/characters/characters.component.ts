import { Component,  OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CharactersService } from '../../service/characters.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CharactersComponent implements OnInit {
  characters: Array<Character>;
  number: number = 1;
  searchCharacter = '';
  searchBoolean: boolean = false;
  searchInputNames: any;

  constructor(private serviceCharacters: CharactersService) {
    this.characters = []
  }

  ngOnInit(): void {
    this.getCharacter()
  }

  getCharacter(){
    this.serviceCharacters.getCharacters().subscribe( data => {
      this.characters = data.results
    })
  }

  getPages(value: number){
    let page = this.number += value
    this.serviceCharacters.getPagesNumber(page).subscribe(page => {
    })
  }

  getSearch(names: any){
    if(this.searchBoolean === true){ this.searchInputNames = names }
    if(this.searchBoolean === false){  this.searchInputNames = names.target.value }
    this.serviceCharacters.searchCharacters(this.searchInputNames).subscribe(search =>{
      this.characters = search.results
    })
  }

  indexOfCharacters(i: any){
  }

  getSearchOfButton(){
    this.searchBoolean = true
    this.getSearch(this.searchCharacter)
  }
}
