import { Routes } from '@angular/router';
import { MyStationsComponent } from './my-stations/my-stations.component';

export const PLAYGROUND_ROUTES: Routes = [
  { path: '', redirectTo: 'my-stations', pathMatch: 'full' },
  {
    path: 'my-stations',
    component: MyStationsComponent,
  },
];
