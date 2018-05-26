// Component symbol from the Angular core library must always
// be imported and the component class should be annotated
// with @Component
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({ // Following is automatically generated three metadata properties
  // Selector css element also matches name of the HTML element that identifies this component
  selector: 'app-heroes', // component's CSS element selector
  templateUrl: './heroes.component.html', // location of component's template file
  styleUrls: ['./heroes.component.css'] // Location of component's private CSS Styles.
})
// Component class is exported so it could be used elsewhere
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  // Lifecycle hook
  // Angular calls this shortly after creating a component
  // Where you usually initialise
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
