import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  url = 'Heroes';

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateHeroes(hero: Heroes): Observable<Heroes[]> {
    return this.http.put<Heroes[]>(`${environment.apiUrl}/${this.url}`, hero);
  }
  public createHeroes(hero: Heroes): Observable<Heroes[]> {
    return this.http.post<Heroes[]>(`${environment.apiUrl}/${this.url}`, hero);
  }
  public deleteHeroes(hero: Heroes): Observable<Heroes[]> {
    return this.http.delete<Heroes[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
}
