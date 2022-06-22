import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelkomPage } from './welkom.page';

const routes: Routes = [
  {
    path: '',
    component: WelkomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelkomPageRoutingModule {}
