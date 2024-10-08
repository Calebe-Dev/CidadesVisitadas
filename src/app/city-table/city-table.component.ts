import { Component } from '@angular/core';
import { city } from '../cities';
import { CityServiceService } from '../city-service.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.css'
})
export class CityTableComponent {

  cities:city [] = [];

  constructor(private service: CityServiceService){}

  ngOnInit(){
    this.LoadCities()
  }

  LoadCities(){
    this.service.getCities().subscribe({
      next: data => this.cities = data
    })
  }

  delete(city: city){
    this.service.delete(city).subscribe({
      next: () => this.LoadCities()
    })
  }

}