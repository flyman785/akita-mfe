import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from './display-data/display-data.component';
import {ProfileModule} from '@stores/profile';

@NgModule({
  imports: [CommonModule, ProfileModule],
  declarations: [DisplayDataComponent],
  exports: [DisplayDataComponent],
})
export class InfoUserModule {}
