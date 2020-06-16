import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';


const routes: Routes = [
  { path: 'cotizaciones', component: CotizacionesComponent },
  { path: '',   redirectTo: '/cotizaciones', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
