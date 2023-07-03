import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from './display-data/display-data.component';
import { InfoUserComponent } from './info-user/info-user.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ProfileStoreModule} from '@stores/profile';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ProfileStoreModule.forStore('profile')
  ],
  declarations: [DisplayDataComponent, InfoUserComponent],
  exports: [DisplayDataComponent, InfoUserComponent],
})
export class InfoUserModule {}
