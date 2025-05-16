import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';

// Importar componentes standalone, los míos
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { EnviarDatosComponent } from './enviardatos/enviardatos.component';
import { EnviarCsvComponent } from './enviarcsv/enviarcsv.component';
import { ConsultarDatosComponent } from './consultardatos/consultardatos.component';
//import { LimpiarCanalComponent } from './limpiar-canal/limpiar-canal.component';

 
// Definir rutas 
export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'enviodatos', component: EnviarDatosComponent },
  { path: 'enviocsv', component: EnviarCsvComponent },
  { path: 'consultarinfo', component: ConsultarDatosComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NavbarComponent, 
    HeaderComponent,
    FooterComponent,
    EnviarDatosComponent,
    EnviarCsvComponent,
    ConsultarDatosComponent,
   // LimpiarCanalComponent,
	AppRoutingModule,
    MatMenuModule
  ],
   bootstrap: [InicioComponent]
})
export class AppModule { }
