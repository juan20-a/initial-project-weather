import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Example} from './example';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlExample = 'https://api.darksky.net/forecast/ce053f1ec1c1e5f7b61764d979484533/37.8267,-122.4233';
  constructor( private http: HttpClient) { }
  getExample() {
    return this.http.get<Example>(this.urlExample);
  }
}
