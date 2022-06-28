import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditoldcarPageRoutingModule } from './editoldcar-routing.module';

import { EditoldcarPage } from './editoldcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditoldcarPageRoutingModule
  ],
  declarations: [EditoldcarPage]
})
export class EditoldcarPageModule {}
