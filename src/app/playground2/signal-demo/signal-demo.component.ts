import { Component, computed, effect, signal } from '@angular/core';
import { InnerComponent } from '../inner/inner.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'ngp-signal-demo',
  standalone: true,
  imports: [
    InnerComponent,
    KnobModule,
    FormsModule,
    ButtonModule,
    DividerModule,
  ],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss',
})
export class SignalDemoComponent {
  value1 = signal(0);
  value2 = signal(0);

  sum = computed(() => this.value1() + this.value2());

  rating = signal(0);

  text = '';

  loggingEffect = effect(() => {
    const msg = `The current sum is: ${this.sum()}`;
    console.log(msg);
    this.text += msg + '\n';
  });

  increaseValue1() {
    this.value1.update((val) => val + 1);
  }

  setSecondValueTo100() {
    this.value2.set(100);
  }

  increaseBothValues() {
    this.value1.update((val) => val + 1);
    this.value2.update((val) => val + 1);
  }

  setRatingTo5() {
    this.rating.set(5);
  }
}
