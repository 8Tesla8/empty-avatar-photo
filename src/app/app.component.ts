import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  users =[];

  constructor() {
    this.users.push({name: "John Wick"});
    this.users.push({name: "Guillermo del Toro"});
    this.users.push({name: "Brad Pitt", photo: "/assets/angular.png"});
    this.users.push({name: "Max Payne"});
    this.users.push({name: "Optimus Prime"});
    this.users.push({name: "Wednesday Addams"});
    this.users.push({name: "Ethan Hunt"});
  }
}
