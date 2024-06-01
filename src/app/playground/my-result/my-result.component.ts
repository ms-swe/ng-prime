import { Component, inject, signal } from '@angular/core';
import { PlaygroundStore } from '../data/playground-store';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { MyGraphComponent } from '../my-graph/my-graph.component';
import { Station } from '../data/model/Station';

@Component({
  selector: 'ngp-my-result',
  standalone: true,
  imports: [DividerModule, TableModule, MyGraphComponent],
  templateUrl: './my-result.component.html',
  styleUrl: './my-result.component.scss',
})
export class MyResultComponent {
  readonly playgroundStore = inject(PlaygroundStore);

  // a deep signal automatically provided by the store
  readonly localLastSearchCriteria = this.playgroundStore.lastSearchCriteria;

  currentStation = signal<Station | undefined>(undefined);
}
