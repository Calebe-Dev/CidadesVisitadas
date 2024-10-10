import { Component } from '@angular/core';
import { city } from '../cities';
import { CityServiceService } from '../city-service.service';
import { Router } from '@angular/router';
import { ConstructorProvider } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

}
