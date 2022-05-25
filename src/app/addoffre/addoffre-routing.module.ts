import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddoffrePage } from './addoffre.page';

const routes: Routes = [
  {
    path: '',
    component: AddoffrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddoffrePageRoutingModule {}
