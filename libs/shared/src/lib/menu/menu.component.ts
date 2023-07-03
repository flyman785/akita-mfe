import { Component, ViewEncapsulation } from '@angular/core';
import {tap} from 'rxjs';
import {LoginQueries} from '@stores/login';

@Component({
  selector: 'akita-mfe-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  isAuthenticated$ = this.loginQueries.isAuthenticated$.pipe(
    tap(value => console.log('ceppaflex', value))
  );

  constructor(
    private loginQueries: LoginQueries
  ) {
  }
}
