import { Component } from '@angular/core';

interface Paquete {
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  paquetes: Paquete[] = [
    {
      nombre: 'Paquete el Caribe',
      imagen: 'assets/caribe.jpg'
    },
    {
      nombre: 'Paquete los Andes',
      imagen: 'assets/andes.jpg'
    },
    {
      nombre: 'Paquete Santa Martha',
      imagen: 'assets/santa.jpg'
    },
    {
      nombre: 'Paquete Medellin',
      imagen: 'assets/medellin.jpg'
    },
    {
      nombre: 'Paquete Bogota',
      imagen: 'assets/bogota.jpg'
    },
    {
      nombre: 'Paquete Boyaca',
      imagen: 'assets/boyaca.jpg'
    },
  ];

  // Para almacenar el paquete seleccionado
  paqueteSeleccionado: string | null = null;

  constructor() {}

  mostrarInfo(nombre: string) {
    this.paqueteSeleccionado = nombre; // Guardar el nombre del paquete seleccionado
  }
}
