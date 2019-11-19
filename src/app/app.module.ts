import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponentComponent } from './person-input-component/person-input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
