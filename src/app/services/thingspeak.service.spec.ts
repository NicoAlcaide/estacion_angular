import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThingspeakService {
  private channelId = '2936934';
  private apiKey = '4YB4XSS1DR3M1RUY';

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    const url = `https://api.thingspeak.com/channels/${this.channelId}/feeds.json?api_key=${this.apiKey}&results=10`;
    return this.http.get(url);
  }

  enviarDatos(datos: any) {
    const url = `https://api.thingspeak.com/update?api_key=${this.apiKey}&field1=${datos.co2}&field2=${datos.ruido}&field3=${datos.luminosidad}&field4=${datos.presion}&field5=${datos.viento}`;
    return this.http.post(url, {});
  }

  limpiarDatos() {
    const url = `https://api.thingspeak.com/channels/${this.channelId}/feeds.json?api_key=6QQ0SJ3UEULL7F8Z`;
    return this.http.delete(url);
  }
}
