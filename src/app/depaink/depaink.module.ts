import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepainkPageRoutingModule } from './depaink-routing.module';

import { DepainkPage } from './depaink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepainkPageRoutingModule
  ],
  declarations: [DepainkPage]
})
export class DepainkPageModule {}
