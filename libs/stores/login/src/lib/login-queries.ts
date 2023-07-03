import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { LoginState } from "./login-interface";
import { LoginStore } from "./login-store";

@Injectable({
  providedIn: 'root'
})
export class LoginQueries extends Query<LoginState> {
    isAuthenticated$: Observable<boolean> = this.select(state => state.authentication);
    username$: Observable<string> = this.select(state => state.username);

    constructor(
        private loginStore: LoginStore
    ){
        super(loginStore);
    }
}
