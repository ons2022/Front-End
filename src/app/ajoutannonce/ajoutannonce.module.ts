import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutannoncePageRoutingModule } from './ajoutannonce-routing.module';

import { AjoutannoncePage } from './ajoutannonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutannoncePageRoutingModule
  ],
  declarations: [AjoutannoncePage]
})
export class AjoutannoncePageModule {}
