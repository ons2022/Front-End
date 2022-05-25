import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemembrePageRoutingModule } from './homemembre-routing.module';

import { HomemembrePage } from './homemembre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemembrePageRoutingModule
  ],
  declarations: [HomemembrePage]
})
export class HomemembrePageModule {}
