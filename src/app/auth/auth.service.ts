import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { ServerLinks } from "../shared/server-links";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {}

  register(user): Observable<any> {
    let body = JSON.stringify({ content: user });

    return this.http.post(ServerLinks.register, body);
  }
}
