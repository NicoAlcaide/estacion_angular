import { Component } from '@angular/core';
import { ThingspeakService } from '../services/thingspeak.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  constructor(private thingspeakService: ThingspeakService) {} // ✅ Inyectar el servicio

  limpiarDatos() {
    this.thingspeakService.limpiarCanal()
      .then(() => {
        alert("✅ Canal de ThingSpeak limpiado correctamente!");
      })
      .catch(err => {
        alert(`❌ Error al limpiar el canal: ${err.message}`);
      });
  }
}

