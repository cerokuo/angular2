import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService  } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

// activatedRoute me sirve para coger parametros de la url.
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService) {
                //  subscribe es un observer,me apunta a un observer
    this.activatedRoute.params.subscribe( params =>  {

      //cojo la info del heroe para el id de la url.
      this.heroe = heroesService.getHeroe(params['id']);
      console.log(this.heroe);

    });
  }

  ngOnInit() {
  }

}
