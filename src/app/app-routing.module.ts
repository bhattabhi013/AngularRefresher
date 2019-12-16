import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponentComponent } from './person-input-component/person-input-component.component';
import { LoginComponentComponent } from '../app/login-component/login-component.component';

const routes: Routes = [
{
  path: '', component: PersonsComponent
},
{
  path: 'input', component : PersonInputComponentComponent
},
{
  path: 'loginPage', component: LoginComponentComponent
}

] ;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
