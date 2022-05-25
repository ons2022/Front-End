import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoiturePage } from './voiture.page';

const routes: Routes = [
  {
    path: '',
    component: VoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoiturePageRoutingModule {}
