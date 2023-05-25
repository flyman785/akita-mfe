import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginStore} from './login-store';
import {LoginQueries} from './login-queries';
import {LoginFacade} from './login-facade';
import {StoreNameToken} from './injection-token';

@NgModule({
  imports: [CommonModule]
})
export class LoginStoreModule {
  static forStore(config: string): ModuleWithProviders<LoginStoreModule> {

    return {
      ngModule: LoginStoreModule,
      providers: [
        {provide: StoreNameToken, useValue: config},
        LoginFacade,
        LoginQueries,
        LoginStore
      ]
    }
  }
}
