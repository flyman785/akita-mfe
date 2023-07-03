import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterLink} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedModule {}
