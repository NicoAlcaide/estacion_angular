import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule aquí
import { ThingspeakService } from '../services/thingspeak.service'; // ✅ Importar el servicio

@Component({
  selector: 'app-enviardatos',
  standalone: true,
  imports: [FormsModule], // ✅ Asegurar que FormsModule está en imports
  templateUrl: './enviardatos.component.html',
  styleUrls: ['./enviardatos.component.css']
})
export class EnviarDatosComponent {
  constructor(private thingspeakService: ThingspeakService) {} // ✅ Inyectar el servicio

  datos = { 
    co2: '',
    ruido: '',
    luminosidad: '',
    presion: '',
    viento: ''
  };

  enviarDatos() {
    this.thingspeakService.enviarDatos(this.datos) // ✅ Llamar a la función en el servicio
      .then(response => {
        console.log('Respuesta de ThingSpeak:', response);
        alert('Datos enviados correctamente a ThingSpeak!');
      })
      .catch(err => {
        alert(`Hubo un problema al enviar los datos: ${err.message}`);
      });
  }
}


