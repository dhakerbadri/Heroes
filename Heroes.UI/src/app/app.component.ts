import { Component } from '@angular/core';
import { Heroes } from './models/heroes';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Heroes.UI';

  heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService) {}

  heroToEdit?: Heroes;

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((result: Heroes[]) => (this.heroes = result));
  }
  updateHeroList(heroes: Heroes[]) {
    this.heroes = heroes;
  }
  initHero() {
    this.heroToEdit = new Heroes();
  }
  editHero(hero: Heroes) {
    this.heroToEdit = hero;
  }
}
