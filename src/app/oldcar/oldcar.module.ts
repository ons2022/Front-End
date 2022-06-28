import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldcarPageRoutingModule } from './oldcar-routing.module';

import { OldcarPage } from './oldcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldcarPageRoutingModule
  ],
  declarations: [OldcarPage]
})
export class OldcarPageModule {}
