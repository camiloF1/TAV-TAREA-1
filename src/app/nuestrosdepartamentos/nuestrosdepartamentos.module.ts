import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestrosdepartamentosPageRoutingModule } from './nuestrosdepartamentos-routing.module';

import { NuestrosdepartamentosPage } from './nuestrosdepartamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestrosdepartamentosPageRoutingModule
  ],
  declarations: [NuestrosdepartamentosPage]
})
export class NuestrosdepartamentosPageModule {}
