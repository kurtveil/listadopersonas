import { PersonaService } from './../persona.service';
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput', {static: false}) nombreInput: ElementRef;
  @ViewChild('apellidoInput', {static: false}) apellidoInput: ElementRef;


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
    const persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    // this.loginservice.enviamensajeaconsola(' enviamos persona ' + persona1.nombre + ' apellido: ' + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }
}
