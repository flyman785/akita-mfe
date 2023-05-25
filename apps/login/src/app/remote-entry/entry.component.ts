import { Component } from '@angular/core';
import { LoginFacade, LoginQueries } from '@stores/login';

@Component({
  selector: 'ai-mfe-login-entry',
  template: `
    <ng-container *ngIf="(isLogged$ | async) === true; else FALSE">
      <akita-mfe-display-data></akita-mfe-display-data>
      <button (click)="logout()">logout</button>
    </ng-container>
    <ng-template #FALSE>
      <akita-mfe-form-login></akita-mfe-form-login>
    </ng-template>
  `,
})
export class RemoteEntryComponent {

  isLogged$ = this.loginQueries.isAuthenticated$;

  constructor(
    private loginFacade: LoginFacade,
    private loginQueries: LoginQueries
  ){}

  logout(): void {
    this.loginFacade.clear();
  }
}
