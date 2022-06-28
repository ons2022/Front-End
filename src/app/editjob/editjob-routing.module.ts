import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditjobPage } from './editjob.page';

const routes: Routes = [
  {
    path: '',
    component: EditjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditjobPageRoutingModule {}
