import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestrosdepartamentosPage } from './nuestrosdepartamentos.page';

const routes: Routes = [
  {
    path: '',
    component: NuestrosdepartamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrosdepartamentosPageRoutingModule {}
