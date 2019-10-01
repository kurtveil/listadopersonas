import { Persona } from './persona.model';

export class PersonaService {
    personas: Persona[] = [new Persona('Kurt', 'Rodriguez'), new Persona('laura', 'camila')];

    agregarPersona(persona: Persona) {
        this.personas.push(persona);
      }

}