import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmobilierPage } from './immobilier.page';

const routes: Routes = [
  {
    path: '',
    component: ImmobilierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImmobilierPageRoutingModule {}
