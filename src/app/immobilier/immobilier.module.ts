import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImmobilierPageRoutingModule } from './immobilier-routing.module';

import { ImmobilierPage } from './immobilier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImmobilierPageRoutingModule
  ],
  declarations: [ImmobilierPage]
})
export class ImmobilierPageModule {}
