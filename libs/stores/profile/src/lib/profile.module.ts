import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileFacade} from './profile-facade';
import {ProfileQueries} from './profile-queries';
import {ProfileStore} from './profile-store';
import {StoreNameToken} from '@mfe/shared';

@NgModule({
  imports: [CommonModule]
})
export class ProfileStoreModule {

  static forStore(name: string): ModuleWithProviders<ProfileStoreModule> {

    return {
      ngModule: ProfileStoreModule,
      providers: [
        {provide: StoreNameToken, useValue: name},
        ProfileFacade,
        ProfileQueries,
        ProfileStore
      ]
    }
  }

}
