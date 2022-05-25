import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddimmobilierPageRoutingModule } from './addimmobilier-routing.module';

import { AddimmobilierPage } from './addimmobilier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddimmobilierPageRoutingModule
  ],
  declarations: [AddimmobilierPage]
})
export class AddimmobilierPageModule {}
