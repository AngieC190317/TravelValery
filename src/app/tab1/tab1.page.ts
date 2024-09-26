import { ContacPage } from './../contac/contac.page';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.open('first');
  }
  // Función para cerrar el menú
  closeMenu() {
    this.menu.close('first'); // Cierra el menú con ID 'first'
  }

  navigateTo(page: string) {
    // Lógica para navegar a las diferentes páginas
  }
}


