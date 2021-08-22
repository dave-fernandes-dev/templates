import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from 'primeng/api';

@NgModule({
  declarations: [ AppComponent ],

  imports: [
    CoreModule,
    ToastModule, 
    AppRoutingModule
  ],

  providers:[MessageService, ConfirmationService],

  bootstrap: [AppComponent],

  exports: [
    ToastModule,
  ]
})
export class AppModule { }
