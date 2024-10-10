import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityServiceService } from '../city-service.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrl: './city-form.component.css'
})
export class CityFormComponent implements OnInit {

   formGrupCity: FormGroup;

    constructor(private router: Router,
                private activatedRouter: ActivatedRoute,
                private service: CityServiceService,
                private FormBuilder: FormBuilder  
               ){ this.formGrupCity = FormBuilder.group({
                  id:     [''],
                  name:   [''],
                  state:  [''],
                  tpoint: [''],
                  rpc:    [''],
                  cep:    ['']
               })}


  ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
      this.LoadCities(id);
  }

  LoadCities(id: number){
    this.service.getCityById(id).subscribe({
      next: data => this.formGrupCity.setValue(data)
    })
  }

  update(){
    this.service.update(this.formGrupCity.value).subscribe({
      next: () => this.router.navigate(['city'])
    })
  }

  save(){
    this.service.save(this.formGrupCity.value).subscribe({
      next: () => this.router.navigate([`/cities`])
    })
  }
  
}
