import { Component } from '@angular/core';
import {LoginQueries} from '@stores/login';

@Component({
  selector: 'akita-mfe-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent {

  user$ = this.loginQueries.username$;

  constructor(
    private loginQueries: LoginQueries
  ) {
  }
}
