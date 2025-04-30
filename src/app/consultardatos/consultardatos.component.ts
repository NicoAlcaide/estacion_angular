import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ThingspeakService } from '../services/thingspeak.service';

@Component({
  selector: 'app-consultardatos',
  standalone: true,
  templateUrl: './consultardatos.component.html',
  styleUrls: ['./consultardatos.component.css'],
  imports: [CommonModule] 
})
export class ConsultarDatosComponent {
  datos: any[] = [];

  constructor(private thingspeakService: ThingspeakService) {}

  obtenerDatos() {
    this.thingspeakService.obtenerDatos()
      .then(feeds => {
        this.datos = feeds || [];
        console.log("✅ Datos cargados en pantalla:", this.datos);
      })
      .catch(err => {
        alert(`Error al obtener datos: ${err.message}`);
      });
  }
}
