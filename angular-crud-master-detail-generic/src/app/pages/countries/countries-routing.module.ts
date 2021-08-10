import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'new', component: CountryFormComponent },
  { path: ':id/edit', component: CountryFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
