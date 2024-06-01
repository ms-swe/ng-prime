import { Component, input, model, ModelSignal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngp-inner',
  standalone: true,
  imports: [CardModule, RatingModule, FormsModule],
  templateUrl: './inner.component.html',
  styleUrl: './inner.component.scss',
})
export class InnerComponent {
  title = input.required<string>();

  rating = model(0);
}
