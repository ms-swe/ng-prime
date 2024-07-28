import { Routes } from '@angular/router';
import { MyStationsComponent } from './my-stations/my-stations.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { SelectionOrderListExampleComponent } from './selection-order-list-example/selection-order-list-example.component';

export const PLAYGROUND_ROUTES: Routes = [
  { path: '', redirectTo: 'my-stations', pathMatch: 'full' },
  {
    path: 'my-stations',
    component: MyStationsComponent,
  },
  {
    path: 'my-reactive-form',
    component: MyReactiveFormComponent,
  },
  {
    path: 'selection-order-list-example',
    component: SelectionOrderListExampleComponent,
  },
];
