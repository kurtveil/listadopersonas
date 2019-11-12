import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) { }

  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-689b8.firebaseio.com/datos.json');
  }

  guardarPersona(personas: Persona[]) {
    this.httpClient.put('https://listado-personas-689b8.firebaseio.com/datos.json', personas)
      .subscribe(
        res => console.log('respuesta de guardar personas:' + res),
        error => console.log('error al guardar persona: ' + error),
      );
  }
}
