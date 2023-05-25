import {Inject, Injectable} from '@angular/core';
import { Store } from "@datorama/akita";
import { LoginState } from "./login-interface";
import {StoreNameToken} from './injection-token';

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
      @Inject(StoreNameToken) config: string
    ) {
        super(createInitialState(), {name: config, resettable: true})
    }
}
