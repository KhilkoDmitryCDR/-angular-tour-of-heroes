import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes= HEROES;
  selectedHero!: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero:Hero){
    this.selectedHero=hero;
    console.log(this.selectedHero);
  }
}