import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'playground', pathMatch: 'full' },
  {
    path: 'playground',
    loadChildren: () =>
      import('./playground/playground.routes').then((m) => m.PLAYGROUND_ROUTES),
  },
];
