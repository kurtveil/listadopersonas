import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado Personas';
  constructor(
  ) {
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBjxHXszSZFlG5bHA9YYoZkgswRn8B8tKY',
      authDomain: 'listado-personas-689b8.firebaseapp.com',
    });
  }


}
