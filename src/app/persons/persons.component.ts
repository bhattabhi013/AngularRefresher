import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
selector: 'app-persons',
templateUrl: './persons.component.html',
styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnDestroy, OnInit{

@Input() personList: string [];
@Input() playerList: any [];
private personListSubs: Subscription;
constructor( private prsService: PersonsService) {
this.personList = prsService.persons;
}
ngOnInit(){
this.prsService.fetchPersons();
this.personListSubs = this.prsService.personsChanged.subscribe(persons =>{
this.personList = persons;
});
}
removePerson(person : string){
this.prsService.removePerson(person);
}
ngOnDestroy(){
this.personListSubs.unsubscribe();
}
}
