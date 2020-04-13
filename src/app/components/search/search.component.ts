import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    heroes:any[]=[];
    termino: string;
  constructor(private _heroesService:HeroesService, 
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

      this.activatedRoute.params.subscribe(params =>{
       // console.log(params['termino']);
       this.termino=(params['termino']);
        this.heroes = this._heroesService.buscarHeroes(params['termino'])
        console.log(this.heroes);
      }

      )
    
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
