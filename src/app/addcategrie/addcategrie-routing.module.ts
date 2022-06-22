import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcategriePage } from './addcategrie.page';

const routes: Routes = [
  {
    path: '',
    component: AddcategriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcategriePageRoutingModule {}
