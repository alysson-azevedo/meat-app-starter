import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MT_API } from '../app.api';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {
  }

  restaurants(query?: string): Observable<Restaurant[]> {
    return this.http.get(`${MT_API}/restaurants`, {params: {q: query}})
      .map((response: Response) => response.json());
  }
}
