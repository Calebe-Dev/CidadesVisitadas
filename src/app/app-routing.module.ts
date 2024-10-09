import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityTableComponent } from './city-table/city-table.component';
import { CityFormComponent } from './city-form/city-form.component';

const routes: Routes = [
  {path: '', redirectTo:'/cities', pathMatch:'full'},
  {path: 'cities', component:CityTableComponent},
  {path: 'cities/:id', component:CityFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
