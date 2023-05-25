import {Injectable} from '@angular/core';
import {Query} from '@datorama/akita';
import {ProfileInterfaces} from './profile-interfaces';
import {ProfileStore} from './profile-store';

@Injectable({
  providedIn: 'root'
})
export class ProfileQueries extends  Query<ProfileInterfaces> {

  profile$ = this.select();

  constructor(
    private profileStore: ProfileStore
  ) {
    super(profileStore);
  }
}
