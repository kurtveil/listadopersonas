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

onPersonaAgregada(persona: Persona) {
  this.personas.push(persona);
}

}
