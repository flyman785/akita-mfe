import { Component } from '@angular/core';
import {tap} from 'rxjs';
import {ProfileFacade, ProfileQueries} from '@stores/profile';

@Component({
  selector: 'akita-mfe-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
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
