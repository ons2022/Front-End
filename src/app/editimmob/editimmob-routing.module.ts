import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditimmobPage } from './editimmob.page';

const routes: Routes = [
  {
    path: '',
    component: EditimmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditimmobPageRoutingModule {}
