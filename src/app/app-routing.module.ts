import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityTableComponent } from './city-table/city-table.component';
import { CityFormComponent } from './city-form/city-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'cities', component:CityTableComponent},
  {path: 'home', component:HomeComponent},
  {path: 'cities/:id', component:CityFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
