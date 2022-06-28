import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccationPage } from './occation.page';

const routes: Routes = [
  {
    path: '',
    component: OccationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccationPageRoutingModule {}
