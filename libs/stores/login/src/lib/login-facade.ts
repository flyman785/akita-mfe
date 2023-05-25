import { Injectable } from "@angular/core";
import { logAction } from "@datorama/akita";
import { LoginState } from "./login-interface";
import { LoginStore } from "./login-store";

@Injectable()
export class LoginFacade {
    constructor(
        private loginStore: LoginStore
    ){}

    set update(value: LoginState) {
        logAction('Update login');
        this.loginStore.update(value);
    }

    clear(): void {
        this.loginStore.reset();
    }
}
