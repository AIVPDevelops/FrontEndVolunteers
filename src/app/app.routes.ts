import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'login-personas',
        loadComponent: () =>
          import('./components/login-personas/login-personas.component').then(m => m.LoginPersonasComponent)
      },
      {
        path: 'restore-password',
        loadComponent: () =>
          import('./components/restore-password/restore-password.component').then(m => m.RestorePasswordComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
];