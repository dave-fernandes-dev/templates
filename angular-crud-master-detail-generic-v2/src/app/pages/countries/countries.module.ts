import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';

import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
//import {ConfirmationService, MessageService} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [ CountryListComponent, CountryFormComponent],
  imports: [ SharedModule, CountriesRoutingModule,
    ToastModule, ButtonModule, ToolbarModule, TableModule, DialogModule, ConfirmDialogModule,
    FileUploadModule, InputTextModule, RatingModule, DropdownModule, RadioButtonModule, InputNumberModule,   
  ],
  
})
export class CountriesModule { }
