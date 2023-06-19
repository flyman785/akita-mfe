import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {AuthenticationModule} from '@authentication';
import {InfoUserModule} from '@akita-mfe/info-user';
import {mfePrefix} from '@mfe/shared';

export const entryModuleFactory = (prefix: string = 'loginM') => {
  @NgModule({
    declarations: [RemoteEntryComponent],
    exports: [
      RemoteEntryComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(remoteRoutes),
      AuthenticationModule,
      InfoUserModule
    ],
    providers: [
      {provide: mfePrefix, useValue: prefix}
    ]
  })
  class RemoteEntryModule {}

  return RemoteEntryModule;
}
