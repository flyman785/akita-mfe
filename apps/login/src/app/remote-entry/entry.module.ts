import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {AuthenticationModule} from '@authentication';
import {mfePrefix} from '@mfe/shared';
import {ButtonModule} from 'primeng/button';
import {InfoUserModule} from '@akita-mfe/info-user';

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
      ButtonModule,
      InfoUserModule
    ],
    providers: [
      {provide: mfePrefix, useValue: prefix}
    ]
  })
  class RemoteEntryModule {}

  return RemoteEntryModule;
}
