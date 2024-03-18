import { Routes } from '@angular/router';
import { MySearchComponent } from './my-search/my-search.component';

export const PLAYGROUND_ROUTES: Routes = [
  { path: '', redirectTo: 'my-search', pathMatch: 'full' },
  {
    path: 'my-search',
    component: MySearchComponent,
  },
];
