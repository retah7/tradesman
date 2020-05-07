import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config';
import { RestClient } from '../common/rest.client';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: RestClient) { }


  login(obj): Observable <any> {
    console.log('api login')
    return this.http.post(config.LOGIN_URL, obj);
  }
}
