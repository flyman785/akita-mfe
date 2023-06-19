import {Inject, Injectable, Optional} from '@angular/core';
import { Store } from "@datorama/akita";
import { LoginState } from "./login-interface";
import {StoreNameToken} from './injection-token';
import {mfePrefix} from '@mfe/shared';

function createInitialState(): LoginState {
    return {
        username: '',
        password: '',
        authentication: false
    };
}

@Injectable({
  providedIn: 'root'
})
export class LoginStore extends Store<LoginState> {
    constructor(
      @Inject(StoreNameToken) config: string,
      @Optional() @Inject(mfePrefix) prefix: string = ''
    ) {
        super(createInitialState(), {name: prefix + config, resettable: true})
    }
}
