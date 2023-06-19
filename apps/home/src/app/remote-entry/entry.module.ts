import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {InfoUserModule} from '@akita-mfe/info-user';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    InfoUserModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
