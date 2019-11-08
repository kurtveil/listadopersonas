import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonaService } from '../../persona.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index: number;

  constructor(
    private loginservice: LoginService,
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personaService.saludar.subscribe((indice: number) =>
      alert('El indice es ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      const persona: Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  onGuardarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.index) {
      this.personaService.modificarPersona(this.index, persona1);
    } else {
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
  eliminarPersona() {
    if (this.index != null) {
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['/personas']);
  }
}
