import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  {
    path: 'employees',
    title: 'Mes Employées - GEmployés',
    loadComponent: () => import('./ui/home/home.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },
  {
    path: 'login',
    title: 'Connexion - GEmployés',
    loadComponent: () => import('./ui/login/login.component'),
  },
  {
    path: 'add-employee',
    title: 'Nouvel employé - GEmployés',
    loadComponent: () => import('./ui/add-employee/add-employee.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },
  {
    path: 'employee/:id',
    loadComponent: () =>
      import('./ui/detail-employee/detail-employee.component'),
    canActivate: [() => inject(AuthService).isLoggedIn()],
  },
  {
    path: '404',
    title: 'Page non trouvée',
    loadComponent: () => import('./ui/page-not-found/page-not-found.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employees',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
