import { Component, inject } from '@angular/core';
import { PlaygroundStore } from '../data/playground-store';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'ngp-my-result',
  standalone: true,
  imports: [DividerModule, TableModule],
  templateUrl: './my-result.component.html',
  styleUrl: './my-result.component.scss',
})
export class MyResultComponent {
  readonly playgroundStore = inject(PlaygroundStore);

  // a deep signal automatically provided by the store
  readonly localLastSearchCriteria = this.playgroundStore.lastSearchCriteria;
}
