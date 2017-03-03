import { Injectable } from '@angular/core';
import { Thing } from "./thing";
import { Observable } from "rxjs";
import { Http } from "@angular/http";

@Injectable()
export class ThingService {
  private thingsSource: string = 'http://api.tailor.local/thing/list';

  constructor(private http: Http) {
  }

  getThings (): Observable<Thing[]> {
    return this.http.get(this.thingsSource)
        .map(resp => resp.json())
        .catch(error => Observable.throw(error));
  }

}
