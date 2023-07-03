import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {InfoUserModule} from '@akita-mfe/info-user';
import {mfePrefix} from '@mfe/shared';

export const homeModuleFactory = (prefix: string = 'homeM') => {
  @NgModule({
    declarations: [RemoteEntryComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(remoteRoutes),
      InfoUserModule
    ],
    providers: [
      {provide: mfePrefix, useValue: prefix}
    ],
  })
  class RemoteEntryModule {}

  return RemoteEntryModule
}
