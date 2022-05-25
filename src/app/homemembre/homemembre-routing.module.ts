import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemembrePage } from './homemembre.page';

const routes: Routes = [
  {
    path: '',
    component: HomemembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemembrePageRoutingModule {}
