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

  delete(city: city):Observable<void>{
    return this.http.delete<void>("http://localhost:3000/cities/" + city.id);
  }

  getCityById(id:number):Observable<city>{
    return this.http.get<city>("http://localhost:3000/cities/" + id);
  }

  update(city:city):Observable<city>{
    return this.http.put<city>("http://localhost:3000/cities/" + city.id, city);
  }

  save(city:city):Observable<city>{
    return this.http.post<city>("http://localhost:3000/cities/", city);
  }

}
