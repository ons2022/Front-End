import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminaddannoncePage } from './adminaddannonce.page';

const routes: Routes = [
  {
    path: '',
    component: AdminaddannoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminaddannoncePageRoutingModule {}
