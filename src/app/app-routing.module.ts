import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// componentes
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './personas/error/error.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate:[LoginGuard] },
  {
    path: 'personas',
    component: PersonasComponent, canActivate:[LoginGuard],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
