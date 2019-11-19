import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonsComponent } from '../persons/persons.component';

@Component({
  selector: 'app-person-input-component',
  templateUrl: './person-input-component.component.html',
  styleUrls: ['./person-input-component.component.css']
})
export class PersonInputComponentComponent {
  enteredPersonName: string;
  @Output() personCreated = new EventEmitter<string>();
  onCreatePerson( ) {
    try{
       this.personCreated.emit(this.enteredPersonName)
;      console.log('user created' + this.enteredPersonName);
      // if(this.enteredPersonName==='abhi'){
      // console.log('user created' + this.enteredPersonName );

      // }else{
      //   console.log("nothing"+this.enteredPersonName);
      // }
      // PersonsComponent.personList.push(personName);
    }catch(err){
      console.log('error at onCreatePerson---->' + err);
    }

}
}
