import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService  } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
})
export class HeroeSearchComponent implements OnInit {

  heroes:any[] = []
  termino:string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);

    } );

  }

}
