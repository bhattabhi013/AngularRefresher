import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class PersonsService {
personsChanged = new Subject <string[]>();
public persons : string[] = [] ;
constructor(private http: HttpClient){}
fetchPersons() {
  this.http
  .get<any>('https://swapi.co/api/people')
  .pipe(
    map(resData => {
      return resData.results.map(character => character.name);
    }))
  .subscribe(transformedData =>{
    // console.log("service data is" + JSON.stringify(transformedData));
    this.personsChanged.next(transformedData);
  });
}

addPerson(name: string) {
  this.persons.push(name);
  this.personsChanged.next(this.persons);
  console.log("persons are "+this.persons);
}

removePerson(name: string){
  this.persons = this.persons.filter(person=>{
    return person !== name;
  });
  console.log("persons "+this.persons);
  this.personsChanged.next(this.persons);
}

}
