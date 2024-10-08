import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from './cities';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  constructor(private http:HttpClient) { }

  getCities():Observable<city[]>{
    return this.http.get<city[]>("http://localhost:3000/cities");
  }
}
