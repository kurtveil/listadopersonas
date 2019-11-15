import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado Personas';
  constructor(private loginService: LoginService
  ) {
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBjxHXszSZFlG5bHA9YYoZkgswRn8B8tKY',
      authDomain: 'listado-personas-689b8.firebaseapp.com',
    });
  }
  salir() {
    this.loginService.logout();
  }
  isAutenticated() {
    return this.loginService.isAutenticated();
  }


}
