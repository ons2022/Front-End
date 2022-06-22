import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncelistPage } from './annoncelist.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncelistPageRoutingModule {}
