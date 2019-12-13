import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonsComponent } from '../persons/persons.component';
import { PersonsService } from '../persons/persons.service';

@Component({
  selector: 'app-person-input-component',
  templateUrl: './person-input-component.component.html',
  styleUrls: ['./person-input-component.component.css']
})
export class PersonInputComponentComponent {
  enteredPersonName = '';
  // @Output() personCreated = new EventEmitter<string>();
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private PersonsService: PersonsService) {}
  onCreatePerson( ) {
    try {
      if (this.enteredPersonName === '') {
        alert('Please enter a name');
        return ;
      }
      //  this.personCreated.emit(this.enteredPersonName)
      this.PersonsService.addPerson(this.enteredPersonName);
      console.log('user created' + this.enteredPersonName);
      this.enteredPersonName = '';
      // if(this.enteredPersonName==='abhi'){
      // console.log('user created' + this.enteredPersonName );

      // }else{
      //   console.log("nothing"+this.enteredPersonName);
      // }
      // PersonsComponent.personList.push(personName);
    } catch (err) {
      console.log('error at onCreatePerson---->' + err);
    }

}
}
