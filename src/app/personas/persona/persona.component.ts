import { PersonaService } from '../../persona.service';
import { Persona } from '../../persona.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {
@Input() persona: Persona;
@Input() indice: number;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }
  emitirSaludo() {
    this.personaService.saludar.emit(this.indice);
  }

}
