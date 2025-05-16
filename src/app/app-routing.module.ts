import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EnviarDatosComponent } from './enviardatos/enviardatos.component';
import { EnviarCsvComponent } from './enviarcsv/enviarcsv.component';
import { ConsultarDatosComponent } from './consultardatos/consultardatos.component';
import { LimpiarCanalComponent } from './limpiar-canal/limpiar-canal.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'enviodatos', component: EnviarDatosComponent },
  { path: 'enviocsv', component: EnviarCsvComponent },
  { path: 'consultarinfo', component: ConsultarDatosComponent },
  { path: 'limpiar', component: LimpiarCanalComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], 
  exports: [RouterModule]
})
export class AppRoutingModule {}