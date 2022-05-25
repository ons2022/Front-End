import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutannoncePage } from './ajoutannonce.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutannoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutannoncePageRoutingModule {}
