import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifmembrePage } from './notifmembre.page';

const routes: Routes = [
  {
    path: '',
    component: NotifmembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifmembrePageRoutingModule {}
