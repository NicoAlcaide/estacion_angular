import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 
import { ThingspeakService } from '../services/thingspeak.service'; 

@Component({
  selector: 'app-enviardatos',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './enviardatos.component.html',
  styleUrls: ['./enviardatos.component.css']
})
export class EnviarDatosComponent {
  constructor(private thingspeakService: ThingspeakService) {} 

  datos = { 
    co2: '',
    ruido: '',
    luminosidad: '',
    presion: '',
    viento: ''
  };

  enviarDatos() {
    this.thingspeakService.enviarDatos(this.datos) 
      .then(response => {
        console.log('Respuesta de ThingSpeak:', response);
        alert('Datos enviados correctamente a ThingSpeak!');
      })
      .catch(err => {
        alert(`Hubo un problema al enviar los datos: ${err.message}`);
      });
  }
}


