import { Component, computed, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngp-my-graph',
  standalone: true,
  imports: [NgOptimizedImage, InputSwitchModule, FormsModule],
  templateUrl: './my-graph.component.html',
  styleUrl: './my-graph.component.scss',
})
export class MyGraphComponent {
  //example: '06b978dd-8c4d-48ac-a0c8-2c16681ed281'
  stationUuid = input<string | undefined>('');

  // example: https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/06b978dd-8c4d-48ac-a0c8-2c16681ed281/W/measurements.png?start=P8D&width=400&height=200
  url = computed(() =>
    this.stationUuid()
      ? `https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/${this.stationUuid()}/W/measurements.png?start=P8D&width=400&height=200`
      : undefined,
  );

  showGraph = signal(false);
}
