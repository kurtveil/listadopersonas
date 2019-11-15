import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
              private loginService: LoginService
              ) { }

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-689b8.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersona(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-689b8.firebaseio.com/datos.json?auth=' + token, personas)
      .subscribe(
        res => console.log('respuesta de guardar personas:' + res),
        error => console.log('error al guardar persona: ' + error),
      );
  }
  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-689b8.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log('resultado modificacr personsa:' + response)
        , error => console.log('error en modificar persona:' + error)
      );
  }
  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-689b8.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log('resultado eliminar personsa:' + response)
        , error => console.log('error en eliminar persona:' + error)
      );
  }
}

