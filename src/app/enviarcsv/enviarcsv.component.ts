
import { Component } from '@angular/core';
import { ThingspeakService } from '../services/thingspeak.service'; 

@Component({
  selector: 'app-enviarcsv',
  standalone: true,
  templateUrl: './enviarcsv.component.html',
  styleUrls: ['./enviarcsv.component.css']
})
export class EnviarCsvComponent {
  constructor(private thingspeakService: ThingspeakService) {} 

  archivoSeleccionado: File | null = null;

  seleccionarArchivo(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarCSV() {
    if (!this.archivoSeleccionado) {
      alert("Error: No se ha seleccionado ningún archivo CSV.");
      return;
    }

    this.thingspeakService.enviarCSV(this.archivoSeleccionado)
      .catch(error => alert(`Hubo un problema al enviar el CSV: ${error.message}`));
  }
}



