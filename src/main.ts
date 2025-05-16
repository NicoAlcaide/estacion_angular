// Modificado Nico

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.module';
import { environment } from './environments/environment';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { InicioComponent } from './app/inicio/inicio.component';
import { EnviarDatosComponent } from './app/enviardatos/enviardatos.component';
import { EnviarCsvComponent } from './app/enviarcsv/enviarcsv.component';
import { ConsultarDatosComponent } from './app/consultardatos/consultardatos.component';
import { LimpiarCanalComponent } from './app/limpiar-canal/limpiar-canal.component';
import { ThingspeakService } from './app/services/thingspeak.service'; // Importa el servicio de la API
import { FormsModule } from '@angular/forms'; 

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), 
    provideRouter(routes),
    ThingspeakService, 
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    EnviarDatosComponent,
	EnviarCsvComponent,
    ConsultarDatosComponent,
	LimpiarCanalComponent
  ]
}).catch(err => console.error(err));

