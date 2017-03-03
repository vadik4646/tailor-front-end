import { Injectable } from '@angular/core';
import { Category } from "./category";
import { Observable } from "rxjs";
import { Http } from "@angular/http";

@Injectable()
export class CategoryService {
  private categorySource = 'http://api.tailor.local/category/list';

  constructor(private http: Http) { }

  getCategories (): Observable<Category[]> {
    return this.http.get(this.categorySource)
        .map(resp => resp.json())
        .catch(error => Observable.throw(error));
  }
}
