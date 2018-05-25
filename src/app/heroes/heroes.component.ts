// Component symbol from the Angular core library must always
// be imported and the component class should be annotated
// with @Component
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({ // Following is automatically generated three metadata properties
  // Selector css element also matches name of the HTML element that identifies this component
  selector: 'app-heroes', // component's CSS element selector
  templateUrl: './heroes.component.html', // location of component's template file
  styleUrls: ['./heroes.component.css'] // Location of component's private CSS Styles.
})
// Component class is exported so it could be used elsewhere
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // Lifecycle hook
  // Angular calls this shortly after creating a component
  // Where you usually initialise
  ngOnInit() {
  }

}
