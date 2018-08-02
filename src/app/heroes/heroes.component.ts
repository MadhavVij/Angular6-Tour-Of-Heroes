import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //selectedHero: Hero;
  
  
  // selectedHero: Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // };

//  heroes = HEROES;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // onSelect(hero:Hero): void{
  //   this.selectedHero = hero;
  // }

  
//  hero = 'Windstorm'

}
