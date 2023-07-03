import { Injectable } from "@angular/core";
import { logAction, resetStores } from "@datorama/akita";
import { LoginState } from "./login-interface";
import { LoginStore } from "./login-store";

@Injectable({
  providedIn: 'root'
})
export class LoginFacade {
    constructor(
        private loginStore: LoginStore
    ){}

    set update(value: LoginState) {
        logAction('Update login');
        this.loginStore.update(value);
    }

    clear(): void {
      resetStores();
    }
}
