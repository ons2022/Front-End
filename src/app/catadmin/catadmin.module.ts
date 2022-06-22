import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatadminPageRoutingModule } from './catadmin-routing.module';

import { CatadminPage } from './catadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatadminPageRoutingModule
  ],
  declarations: [CatadminPage]
})
export class CatadminPageModule {}
