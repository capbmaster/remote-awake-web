import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'calendario', loadComponent: () => import('./pages/calendario/calendario.component').then(m => m.CalendarioComponent) },
  { path: 'select-calendar', loadComponent: () => import('./pages/select-calendar/select-calendar.component').then(m => m.SelectCalendarComponent) },
  { path: 'permitir-acceso', loadComponent: () => import('./pages/permitir-acceso/permitir-acceso.component').then(m => m.PermitirAccesoComponent) },
  { path: 'configuracion', loadComponent: () => import('./pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent) },
  { path: 'favoritos', loadComponent: () => import('./pages/favoritos/favoritos.component').then(m => m.FavoritosComponent) },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
