import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditimmobPageRoutingModule } from './editimmob-routing.module';

import { EditimmobPage } from './editimmob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditimmobPageRoutingModule
  ],
  declarations: [EditimmobPage]
})
export class EditimmobPageModule {}
