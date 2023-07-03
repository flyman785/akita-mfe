import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import { LoginState } from "./login-interface";

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
@StoreConfig({name: 'login', resettable: true})
export class LoginStore extends Store<LoginState> {
    constructor() {
        super(createInitialState())
    }
}
