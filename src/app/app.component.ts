import { PersonaService } from './persona.service';
import { LoginService } from './loginService';
import { Component } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado personas';
  personas: Persona[] = [];

  constructor(
    private loginService: LoginService,
    private personaService: PersonaService) {
  }

onPersonaAgregada(persona: Persona) {
  // this.loginService.enviamensajeaconsola(' agregamos al arreglo la nueva persona ' + persona.apellido);
  // this.personas.push(persona);
  this.personaService.agregarPersona(persona);
}

}
