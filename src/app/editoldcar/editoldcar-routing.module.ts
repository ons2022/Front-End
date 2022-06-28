import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditoldcarPage } from './editoldcar.page';

const routes: Routes = [
  {
    path: '',
    component: EditoldcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditoldcarPageRoutingModule {}
