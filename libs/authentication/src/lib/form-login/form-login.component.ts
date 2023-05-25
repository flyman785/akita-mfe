import { Component } from '@angular/core';
import {LoginFacade} from '@stores/login';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'akita-mfe-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  form: FormGroup;
  constructor(
    private loginFacade: LoginFacade,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group({
      username: [],
      password: []
    })
  }

  login(): void {
    const {username, password} = this.form.getRawValue();
    this.loginFacade.update = {username, password, authentication: true};
  }
}
