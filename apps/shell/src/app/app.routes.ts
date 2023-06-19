import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('home/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => {
      return m.entryModuleFactory('mfe_l')
    }),
  }
];
