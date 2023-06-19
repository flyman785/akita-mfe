import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {AuthenticationModule} from '@authentication';
import {InfoUserModule} from '@akita-mfe/info-user';
import {LoginStoreModule} from '@stores/login';

@NgModule({
  declarations: [RemoteEntryComponent],
  exports: [
    RemoteEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    AuthenticationModule
  ]
})
export class RemoteEntryModule {}
