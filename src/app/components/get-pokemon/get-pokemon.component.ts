import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.scss']
})
export class GetPokemonComponent implements OnInit {

  

  ngOnInit(): void {
  }

  searchTerm: string = '' ;
  pokemonData: any;

  constructor(private pokeApiService: PokeApiService) { }

  onSearch(): void {
    console.log(this.searchTerm)
    this.pokeApiService.grabPoke(this.searchTerm)
      .subscribe((data) => {
        this.pokemonData = data;
        console.log(this.pokemonData);
      });
  }

}
