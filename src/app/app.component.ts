import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'hello world';
  title = 'angular-refresher';
  persons: string[] = ['abhishek', 'abhi'];
  players: any[] = ['Fury', 'Wilder', 2];
  onPersonCreated(name:string){
    this.persons.push(name);
  }
}
