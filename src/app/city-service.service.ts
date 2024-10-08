import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './cities';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>{
    return this.http.get<City[]>('http://localhost:3000/cities')
  }
}
