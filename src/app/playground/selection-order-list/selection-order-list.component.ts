import { Component, effect, input, signal } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';

export interface SelectionOrderItem {
  name: string;
}

@Component({
  selector: 'ngp-selection-order-list',
  standalone: true,
  imports: [ListboxModule, FormsModule, OrderListModule],
  templateUrl: './selection-order-list.component.html',
  styleUrl: './selection-order-list.component.scss',
})
export class SelectionOrderListComponent<T extends SelectionOrderItem> {
  availableItems = input.required<T[]>();
  chosenAvailableItems = signal([] as T[]);
  selectedItems = signal([] as T[]);

  loggingEffect = effect(() => {
    console.log(
      'Chosen available items: ' + JSON.stringify(this.chosenAvailableItems()),
    );
  });
}
