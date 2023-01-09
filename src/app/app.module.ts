import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriterisComponent } from './projecte/components/criteris/criteris.component';
import { RubriquesComponent } from './projecte/components/rubriques/rubriques.component';
import { ValoracionsComponent } from './projecte/components/valoracions/valoracions.component';

@NgModule({
  declarations: [
    AppComponent,
    CriterisComponent,
    ValoracionsComponent,
    RubriquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
