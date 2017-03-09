import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptionsArgs} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ServerResponseTypes} from "./server-response-types";
import {Router} from "@angular/router";

@Injectable()
export class JsonHttpHelper {
  protected headers: Headers;

  constructor(private http: Http, private router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(url:string) : Observable<any> {
    return this.http.get(url)
      .map((response: Response) => this.handleResponse(response))
      .catch((error: Response) => this.handleError(error));
  }

  post(url:string, data:any, args: RequestOptionsArgs = {}) : Observable<any> {
    this.mergeHeaders(args);

    return this.http.post(url, JSON.stringify(data), args)
      .map((response: Response) => this.handleResponse(response))
      .catch((error: Response) => this.handleError(error));
  }

  put(url:string, data:any, args: RequestOptionsArgs = {}) : Observable<any> {
    this.mergeHeaders(args);

    return this.http.put(url, JSON.stringify(data), args)
      .map((response: Response) => this.handleResponse(response))
      .catch((error: Response) => this.handleError(error));
  }

  remove(url: string, args: RequestOptionsArgs = {}): Observable<any> {
    this.mergeHeaders(args);

    return this.http.delete(url, args)
      .map((response: Response) => this.handleResponse(response))
      .catch((error: Response) => this.handleError(error));
  }

  private mergeHeaders(requestOptions) {
    if (requestOptions.hasOwnProperty('headers')) {
      return;
    }
    for (let headerKey of requestOptions.headers) {
      this.headers.append(headerKey, requestOptions.headers[headerKey]);
    }
  }

  private handleError(error:Response) {
    if (error.status === 401) {
      this.router.navigate(['/login']);
    }

    return Observable.throw(error);
  }

  private handleResponse(response: Response) {
    let responseContent = response.json();

    if (responseContent.type === ServerResponseTypes.DANGER) {
      response.statusText = responseContent.message;
      return Observable.throw(response);
    }

    return responseContent;
  }
}