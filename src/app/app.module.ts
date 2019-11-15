import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// services
import { PersonaService } from './persona.service';
import { LoginService } from './login/login.service';
import { DataServices } from './data.services';
import { LogginService } from './loggin.service';
// componentes
import { PersonaComponent } from './personas/persona/persona.component';
import { AppComponent } from './app.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './personas/error/error.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogginService, PersonaService, DataServices, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
