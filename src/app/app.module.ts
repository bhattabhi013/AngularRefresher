import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponentComponent } from './person-input-component/person-input-component.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonsService } from './persons/persons.service';
import { LoginComponentComponent } from './login-component/login-component.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
