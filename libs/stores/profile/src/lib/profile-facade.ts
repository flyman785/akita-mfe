import {Injectable} from '@angular/core';
import {ProfileStore} from './profile-store';
import {ProfileInterfaces} from './profile-interfaces';
import {logAction} from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacade {

  constructor(
    private storeProfile: ProfileStore
  ) {
  }

  update(value: ProfileInterfaces): void {
    logAction('Update profile');
    this.storeProfile.update(value);
  }

  reset(): void {
    this.storeProfile.reset();
  }
}
