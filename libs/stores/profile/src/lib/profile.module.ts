import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileFacade} from './profile-facade';
import {ProfileQueries} from './profile-queries';
import {ProfileStore} from './profile-store';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProfileFacade,
    ProfileQueries,
    ProfileStore
  ]
})
export class ProfileModule {}
