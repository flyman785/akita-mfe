import {Inject, Injectable, Optional} from '@angular/core';
import {Store} from '@datorama/akita';
import {ProfileInterfaces} from './profile-interfaces';
import {mfePrefix, StoreNameToken} from '@mfe/shared';

function createInitialState(): ProfileInterfaces {
  return {
    role: 0,
    city: ''
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProfileStore extends Store<ProfileInterfaces> {
  constructor(
    @Inject(StoreNameToken) config: string,
    @Optional() @Inject(mfePrefix) prefix: string = ''
  ) {
    super(createInitialState(), {name: prefix + config, resettable: true})
  }
}
