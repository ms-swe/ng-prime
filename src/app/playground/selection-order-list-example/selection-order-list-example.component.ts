import { Component, signal } from '@angular/core';
import { SelectionOrderListComponent } from '../selection-order-list/selection-order-list.component';
import { ExampleInterface } from './example-interface';

@Component({
  selector: 'ngp-selection-order-list-example',
  standalone: true,
  imports: [SelectionOrderListComponent],
  templateUrl: './selection-order-list-example.component.html',
  styleUrl: './selection-order-list-example.component.scss',
})
export class SelectionOrderListExampleComponent {
  exampleItems = signal([
    { name: 'Name1', MyAttribute: 'attrib1' },
    { name: 'Name2', MyAttribute: 'attrib2' },
    { name: 'Name3', MyAttribute: 'attrib3' },
    { name: 'Name4', MyAttribute: 'attrib4' },
    { name: 'Name5', MyAttribute: 'attrib5' },
    { name: 'Name6', MyAttribute: 'attrib6' },
  ] as ExampleInterface[]);
}
