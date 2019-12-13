import { Component, OnInit, Input } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

@Input() personList: string [];
@Input() playerList: any [];
constructor( prsSerice: PersonsService) {
  this.personList = prsSerice.persons;
}

}
