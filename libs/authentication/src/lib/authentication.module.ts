import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginStoreModule} from '@stores/login';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginStoreModule.forStore('login')
  ],
  declarations: [FormLoginComponent],
  exports: [FormLoginComponent],
})
export class AuthenticationModule {}
