import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('home/Module').then((m) => m.homeModuleFactory('mfe_h')),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => {
      return m.entryModuleFactory()
    }),
  }
];
