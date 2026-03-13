import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/calendario', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'calendario', loadComponent: () => import('./pages/calendario/calendario.component').then(m => m.CalendarioComponent) },
  { path: 'configuracion', loadComponent: () => import('./pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent) }
];
