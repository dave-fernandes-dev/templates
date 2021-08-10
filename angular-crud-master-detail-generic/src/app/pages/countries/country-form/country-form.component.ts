import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"

import { Country } from "../shared/country.model";
import { CountryService } from "../shared/country.service";

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent extends BaseResourceFormComponent<Country> {

  constructor(protected messageService: MessageService, protected countryService: CountryService, protected injector: Injector, ) { 
    super(injector, new Country(), countryService, Country.fromJson,  messageService)
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      code: [null]
    });
  }


  protected creationPageTitle(): string {
    return "Cadastro de Novo Registro";
  }

  protected editionPageTitle(): string {
    const countryName = this.resource.name || "";
    return "Editando Registro: " + countryName;
  }


}
