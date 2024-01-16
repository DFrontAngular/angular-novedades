import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'angular-15',
    title: 'Angular 15',
    loadComponent: () =>
      import('./features/angular-15/angular-15.component').then(
        (c) => c.Angular15Component
      ),
  },
  {
    path: 'angular-16',
    title: 'Angular 16',
    loadComponent: () =>
      import('./features/angular-16/angular-16.component').then(
        (c) => c.Angular16Component
      ),
    children: [
      {
        path: 'signals',
        loadComponent: () =>
          import(
            './features/angular-16/components/signal-example/signal-example.component'
          ).then((c) => c.SignalExampleComponent),
      },
      {
        path: 'router',
        loadComponent: () =>
          import(
            './features/angular-16/components/router-example/router-example.component'
          ).then((c) => c.RouterExampleComponent),
      },
    ],
  },
  {
    path: 'angular-17',
    title: 'Angular 17',
    loadComponent: () =>
      import('./features/angular-17/angular-17.component').then(
        (c) => c.Angular17Component
      ),
  },
];
