import { Persona } from './persona.model';
import { LoginService } from './login.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';


@Injectable()
export class PersonaService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();
  constructor(
    private loginService: LoginService,
    private dataService: DataServices,
  ) {

  }
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  agregarPersona(persona: Persona) {
    this.loginService.enviaMensajeAconsola('agregar persona ' + persona.nombre);
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersona(this.personas);
  }

  encontrarPersona(index: number) {
    const persona: Persona = this.personas[index];
    return persona;
  }
  modificarPersona(index: number, persona: Persona) {
    const persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    // se vuelve a guardar el arreglo para verificar los indices
    this.modificarPersonas();
  }
  modificarPersonas() {
    if (this.personas != null) {
      this.dataService.guardarPersona(this.personas);
    }
  }
  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }
}
