import { Component } from '@angular/core';
import {ProfileFacade, ProfileQueries} from '@stores/profile';

@Component({
  selector: 'akita-mfe-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  profile$ = this.profileQueries.profile$;

  constructor(
    private profileQueries: ProfileQueries,
    private profileFacade: ProfileFacade
  ) {
  }

  update(): void {
    const role = this.profileQueries.actualRole;
    this.profileFacade.update({
      role: (role + 1),
      city: 'Rome'
    })
  }
}
