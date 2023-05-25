import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {ProfileInterfaces} from './profile-interfaces';

function createInitialState(): ProfileInterfaces {
  return {
    role: 0,
    city: ''
  }
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'profile', resettable: true })
export class ProfileStore extends Store<ProfileInterfaces> {
  constructor() {
    super(createInitialState());
  }
}
