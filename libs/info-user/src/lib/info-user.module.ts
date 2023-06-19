import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from './display-data/display-data.component';
import { InfoUserComponent } from './info-user/info-user.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DisplayDataComponent, InfoUserComponent],
  exports: [DisplayDataComponent, InfoUserComponent],
})
export class InfoUserModule {}
