import { Component } from '@angular/core';
import {MySearchComponent} from "../my-search/my-search.component";
import {MyResultComponent} from "../my-result/my-result.component";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'ngp-my-stations',
  standalone: true,
  imports: [
    MySearchComponent,
    MyResultComponent,
    DividerModule
  ],
  templateUrl: './my-stations.component.html',
  styleUrl: './my-stations.component.scss'
})
export class MyStationsComponent {

}
