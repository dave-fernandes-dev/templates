import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [ AppComponent ],

  imports: [
    CoreModule,
    ToastModule, ButtonModule, 
    AppRoutingModule
  ],

  providers:[MessageService],

  bootstrap: [AppComponent],

  exports: [
    ToastModule,
    ButtonModule
  ]
})
export class AppModule { }
