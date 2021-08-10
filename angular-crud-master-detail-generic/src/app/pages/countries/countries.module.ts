import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';


@NgModule({
  declarations: [ CountryListComponent, CountryFormComponent],
  imports: [ SharedModule, CountriesRoutingModule],
  
})
export class CountriesModule { }
