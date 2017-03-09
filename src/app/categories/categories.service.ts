import { Injectable } from '@angular/core';
import { ServerLinks } from "../shared";
import {JsonHttpHelper} from "../shared/json-http-helper.service";

@Injectable()
export class CategoriesService {

  constructor(private jsonHttp: JsonHttpHelper) { }

  getCategories() {
    console.log(this.jsonHttp);
    return this.jsonHttp.get(ServerLinks.categoryList);
  }

}
