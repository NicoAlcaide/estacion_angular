import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultarDatosComponent } from './consultardatos/consultardatos.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // ✅ Página principal
  { path: 'consultar-datos', component: ConsultarDatosComponent }, // ✅ Ruta de consulta
  { path: '**', redirectTo: '', pathMatch: 'full' } // ✅ Redirigir rutas desconocidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ✅ Usamos `useHash: true`
  exports: [RouterModule]
})
export class AppRoutingModule {}