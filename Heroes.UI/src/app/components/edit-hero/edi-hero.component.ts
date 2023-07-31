import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroes } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-edi-hero',
  templateUrl: './edi-hero.component.html',
  styleUrls: ['./edi-hero.component.css'],
})
export class EdiHeroComponent {
  @Input() hero?: Heroes;
  @Output() heroesUpdated = new EventEmitter<Heroes[]>();

  constructor(private heroesService: HeroesService) {}

  updateHero(hero: Heroes) {
    this.heroesService
      .updateHeroes(hero)
      .subscribe((heroes: Heroes[]) => this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero: Heroes) {
    this.heroesService
      .deleteHeroes(hero)
      .subscribe((heroes: Heroes[]) => this.heroesUpdated.emit(heroes));
  }
  createHero(hero: Heroes) {
    this.heroesService
      .createHeroes(hero)
      .subscribe((heroes: Heroes[]) => this.heroesUpdated.emit(heroes));
  }
}
