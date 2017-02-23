import { Injectable } from '@angular/core';
import { Thing } from "./thing";
import { Observable } from "rxjs";
import {Jsonp, Http} from "@angular/http";

@Injectable()
export class ThingService {
  private thingsSource: string = 'http://tailor-api.local/thing/list';

  constructor(private jsonp: Jsonp, private http: Http) {
  }

  getThings (): Observable<Thing[]> {

    return this.http.get(this.thingsSource)
        .map(resp => resp.json())
        .catch(error => Observable.throw(error));
  }

}
