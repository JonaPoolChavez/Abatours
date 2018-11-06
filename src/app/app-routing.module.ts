import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarComponent } from './components/circuito_turistico/mostrar/mostrar.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'circuito-turistico',
    pathMatch: 'full'
  },
  {
    path: 'circuito-turistico',
    component: MostrarComponent,
    children: [
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 