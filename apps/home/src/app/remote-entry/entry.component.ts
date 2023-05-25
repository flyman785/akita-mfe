import { Component } from '@angular/core';
import {tap} from 'rxjs';
import {ProfileQueries, ProfileFacade} from '@stores/profile';

@Component({
  selector: 'ai-mfe-home-entry',
  template: `
    <akita-mfe-display-data></akita-mfe-display-data>
    <div>profile: {{profile$ | async | json}}</div>
    <button (click)="update()">update info</button>
  `,
})
export class RemoteEntryComponent {

  profile$ = this.profileQueries.profile$.pipe(
    tap(v => console.log('v', v))
  );

  constructor(
    private profileQueries: ProfileQueries,
    private profileFacade: ProfileFacade
  ) {
  }

  update(): void {
    this.profileFacade.update({
      role: 1,
      city: 'Rome'
    })
  }

}
