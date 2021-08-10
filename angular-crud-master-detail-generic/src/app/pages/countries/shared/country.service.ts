import { Injectable, Injector } from '@angular/core';
import { Country } from "./country.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseResourceService<Country> {

  constructor(protected injector: Injector) {
    super("http://localhost:3001/countries", injector, Country.fromJson);
  }

}