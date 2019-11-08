import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../login.service';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personaService: PersonaService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }
  agregar() {
    this.router.navigate(['personas/agregar']);
  }

}
