import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldcarPage } from './oldcar.page';

const routes: Routes = [
  {
    path: '',
    component: OldcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldcarPageRoutingModule {}
