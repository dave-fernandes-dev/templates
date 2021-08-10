import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list/base-resource-list.component";

import { Country } from "../shared/country.model";
import { CountryService } from "../shared/country.service";

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent extends BaseResourceListComponent<Country> {

   constructor(private countryService: CountryService, protected messageService: MessageService,) { 
    super(countryService, messageService);
  }


}
