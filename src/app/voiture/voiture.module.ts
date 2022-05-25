import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoiturePageRoutingModule } from './voiture-routing.module';

import { VoiturePage } from './voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoiturePageRoutingModule
  ],
  declarations: [VoiturePage]
})
export class VoiturePageModule {}
