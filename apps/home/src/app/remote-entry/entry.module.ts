import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import {ProfileModule} from '@stores/profile';
import {LoginStoreModule} from '@stores/login';
import {InfoUserModule} from '@akita-mfe/info-user';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    ProfileModule,
    LoginStoreModule.forStore('login1'),
    InfoUserModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
