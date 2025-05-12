import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ThingspeakService {
  private channelId = "2936934"; // ID de mi canal
  private apiKey = '4YB4XSS1DR3M1RUY';
  private apiKeyBorrado = '6QQ0SJ3UEULL7F8Z'; //  API Key de escritura
 
 enviarDatos(datos: any): Promise<any> {
    // Si falta algún dato, mostramos un error
    if (!datos.co2 || !datos.ruido || !datos.luminosidad || !datos.presion || !datos.viento) {
      alert("Error: No se han capturado correctamente los datos.");
      return Promise.reject("Datos vacíos o no capturados.");
    }

    const url = `https://api.thingspeak.com/update?api_key=${this.apiKey}&field1=${datos.co2}&field2=${datos.ruido}&field3=${datos.luminosidad}&field4=${datos.presion}&field5=${datos.viento}`;

    return fetch(url, { method: 'GET' })
      .then(response => response.text()) 
      .then(entryId => {
        if (entryId === '0') {
          throw new Error('Error: La API Key no tiene permisos de escritura.');
        }
        
      })
      .catch(error => {
        alert(`Hubo un problema al enviar los datos: ${error.message}`);
        throw error;
      });
  }
  
  limpiarCanal(): Promise<any> {
    const url = `https://api.thingspeak.com/channels/${this.channelId}/feeds.json?api_key=${this.apiKeyBorrado}&method=delete`;

    return fetch(url, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo limpiar el canal.`);
        }
        alert("✅ Canal de ThingSpeak limpiado correctamente!");
      })
      .catch(error => {
        alert(`Hubo un problema al limpiar el canal: ${error.message}`);
        throw error;
      });
  }
  
  
  
  async enviarCSV(archivo: File): Promise<void> {
    const texto = await archivo.text(); // Leer contenido del archivo CSV
    const lineas = texto.split("\n").map(line => line.trim()).filter(line => line); // Dividir en líneas y eliminar espacios en blanco

    console.log(`Procesando archivo CSV con ${lineas.length} líneas...`);
    alert(`Procesando archivo CSV con ${lineas.length} líneas. Se enviarán con retardo de 20 segundos entre cada línea.`);

    for (let i = 0; i < lineas.length; i++) {
      const valores = lineas[i].split(","); // Separar cada línea en columnas
      if (valores.length < 5 || valores.some(val => isNaN(Number(val)))) {
        console.warn(`Línea ${i + 1} ignorada: formato incorrecto.`);
        continue;
      }

      const [co2, ruido, luminosidad, presion, viento] = valores.map(Number); // Convertir valores a números
      const url = `https://api.thingspeak.com/update?api_key=${this.apiKey}&field1=${co2}&field2=${ruido}&field3=${luminosidad}&field4=${presion}&field5=${viento}`;

      try {
        const response = await fetch(url, { method: 'GET' });
        const entryId = await response.text();
        if (entryId === '0') throw new Error(`❌ Error al enviar línea ${i + 1}.`);

        console.log(`Línea ${i + 1} enviada correctamente.`);
      } catch (error: any) { // Especificamos `any` para evitar el error TS18046
  console.error(`Error en línea ${i + 1}:`, error);
  alert(`❌ Hubo un problema al enviar la línea ${i + 1}: ${error.message || error}`);
}

      await new Promise(resolve => setTimeout(resolve, 20000)); // Esperar 20 segundos antes de enviar la siguiente línea
    }

    alert("Envío del CSV completado!");
  }
  
  
 
  async obtenerDatos(): Promise<any> {
    const url = `https://api.thingspeak.com/channels/${this.channelId}/feeds.json?api_key=${this.apiKey}`; 

    try {
      console.log("Recuperando datos de ThingSpeak...");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudieron obtener los datos.`);
      }

      const data = await response.json();
      console.log("Datos obtenidos correctamente:", data);

      if (!data.feeds || data.feeds.length === 0) {
        alert("El canal no tiene datos. Envíe información manualmente o mediante un fchero CSV.");
        return [];
      }

      return data.feeds;
    } catch (error: any) {
      console.error("Error al obtener los datos:", error);
      alert(`Hubo un problema al obtener los datos: ${error.message || error}`);
      throw error;
    }
  }

  
}
