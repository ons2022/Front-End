import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccationPageRoutingModule } from './occation-routing.module';

import { OccationPage } from './occation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccationPageRoutingModule
  ],
  declarations: [OccationPage]
})
export class OccationPageModule {}
