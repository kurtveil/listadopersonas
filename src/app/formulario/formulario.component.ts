import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../loginService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  // nombreInput: string;
  // apellidoInput: string;

  constructor(private loginservice: LoginService ) { }

  ngOnInit() {
  }
  onAgregarPersona() {
    const persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loginservice.enviamensajeaconsola(' enviamos persona ' + persona1.nombre + ' apellido: ' + persona1.apellido);
    this.personaCreada.emit(persona1);
  }
}
