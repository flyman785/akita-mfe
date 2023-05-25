import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DisplayDataComponent],
  exports: [DisplayDataComponent],
})
export class InfoUserModule {}
