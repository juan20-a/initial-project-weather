import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiServiceService {
  urlExample = 'https://api.darksky.net/forecast/ce053f1ec1c1e5f7b61764d979484533/37.8267,-122.4233';
  constructor( private http: HttpClient) { }
  getExample() {
    return this.http.get(this.urlExample);
  }
}
