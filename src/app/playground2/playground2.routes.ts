import { Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';

export const PLAYGROUND2_ROUTES: Routes = [
  { path: '', redirectTo: 'my-signaldemo', pathMatch: 'full' },
  {
    path: 'my-signaldemo',
    component: SignalDemoComponent,
  },
];
