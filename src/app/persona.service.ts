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

  encontrarPersona(index: number) {
    const persona: Persona = this.personas[index];
    return persona;
  }
  modificarPersona(index: number, persona: Persona) {
    const persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}