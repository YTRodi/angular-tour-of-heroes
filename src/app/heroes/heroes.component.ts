import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public hero: Hero = {
    id: 1,
    name: 'Spiderman',
  };

  public heroes = HEROES;
  public selectedHero?: Hero;

  constructor() {}

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {}
}
