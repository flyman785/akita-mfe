import { Component } from '@angular/core';
import {tap} from 'rxjs';
import {LoginQueries} from '@stores/login';

@Component({
  selector: 'akita-mfe-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent {

  user$ = this.loginQueries.username$.pipe(
    tap(v => console.log('vl', v))
  );

  constructor(
    private loginQueries: LoginQueries
  ) {
  }
}
