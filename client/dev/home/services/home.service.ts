import {Injectable} from "@angular/core";
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  getUser(userId: string){
    let queryString = '?userid='+userId;
    return this.http.get('/api/getUser'+queryString)
      .map(res => res.json());
  }

  createUser(json: string){

    var headers = new Headers();
    headers.append('Content-Type',
      'application/json');

    return this.http.post('/api/createUser',
      json, {
        headers: headers
      }).map( res => res.json());
  }

}




