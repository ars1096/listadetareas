import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PrioridadComponent} from './prioridad.component';
import {OrdenatareasPipe} from "./shared/ordenatareas.pipe";
import { FiltroDonePipe } from './filtro-done.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    OrdenatareasPipe,
    FiltroDonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
