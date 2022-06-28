import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditjobPageRoutingModule } from './editjob-routing.module';

import { EditjobPage } from './editjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditjobPageRoutingModule
  ],
  declarations: [EditjobPage]
})
export class EditjobPageModule {}
