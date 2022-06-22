import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelkomPageRoutingModule } from './welkom-routing.module';

import { WelkomPage } from './welkom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelkomPageRoutingModule
  ],
  declarations: [WelkomPage]
})
export class WelkomPageModule {}
