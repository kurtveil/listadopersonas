import { Component } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listado personas';
  personas: Persona[] = [new Persona('Kurt', 'Rodriguez'), new Persona('laura', 'camila')];
  nombreInput: string;
  apellidoInput: string;

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
