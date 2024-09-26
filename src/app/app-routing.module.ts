import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  // Rutas para las nuevas páginas
  {
    path: 'contact',
    loadChildren: () => import('./contac/contac.module').then(m => m.ContacPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesPageModule)
  },
<<<<<<< HEAD
  {
    path: 'contac',
    loadChildren: () => import('./contac/contac.module').then(m => m.ContacPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosPageModule)
=======
  // Nueva ruta para los detalles del paquete con parámetro dinámico
  {
    path: 'detalles-paquete/:id',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
>>>>>>> 0f644c2682c86578f0aae6d5f193e90bb3a1338b
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
