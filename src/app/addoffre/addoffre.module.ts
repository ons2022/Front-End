import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddoffrePageRoutingModule } from './addoffre-routing.module';

import { AddoffrePage } from './addoffre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddoffrePageRoutingModule
  ],
  declarations: [AddoffrePage]
})
export class AddoffrePageModule {}
