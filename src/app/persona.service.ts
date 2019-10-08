import { Persona } from './persona.model';
import { LoginService } from './login.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('Kurt', 'Rodriguez'),
    new Persona('laura', 'camila')
  ];

  saludar = new EventEmitter<number>();
  constructor(private loginService: LoginService) {

  }
  agregarPersona(persona: Persona) {
    this.loginService.enviaMensajeAconsola('agregar persona ' + persona.nombre);
    this.personas.push(persona);
  }
}