import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddimmobilierPage } from './addimmobilier.page';

const routes: Routes = [
  {
    path: '',
    component: AddimmobilierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddimmobilierPageRoutingModule {}
