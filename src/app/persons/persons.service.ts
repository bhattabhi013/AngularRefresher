import { Injectable } from '@angular/core';

@Injectable()

export class PersonsService {
  persons :string[] = ['MAX','MANUEL','ANNA'];

  addPerson(name:string){
    this.persons.push(name);
    console.log("persons are "+this.persons);
  }

}
