import { Component } from '@angular/core';
import { city } from '../cities';
import { CityServiceService } from '../city-service.service';
import { Router } from '@angular/router';
import { ConstructorProvider } from '@angular/core';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.css'
})
export class CityTableComponent {

  cities:city [] = [];

  constructor(private service: CityServiceService,
              private router: Router){}

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
  create(){
    this.router.navigate(['/city'])
  }
}