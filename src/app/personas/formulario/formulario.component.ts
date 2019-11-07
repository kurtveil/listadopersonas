import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../persona.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;



  constructor(
    private loginservice: LoginService,
    private personaService: PersonaService) {

    this.personaService.saludar.subscribe(
      (indice: number) => alert('El indice es ' + indice)
    );
  }

  ngOnInit() {
  }
  onAgregarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);

    this.personaService.agregarPersona(persona1);
  }
}
