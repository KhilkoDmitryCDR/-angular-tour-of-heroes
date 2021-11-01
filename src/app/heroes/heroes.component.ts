import { MessageService } from './../message.service';
import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero!: Hero;

  constructor(private heroService: HeroService,private massageService:MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero=hero;
    console.log(this.selectedHero);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
