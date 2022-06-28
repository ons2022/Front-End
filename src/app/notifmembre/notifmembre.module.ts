import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifmembrePageRoutingModule } from './notifmembre-routing.module';

import { NotifmembrePage } from './notifmembre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifmembrePageRoutingModule
  ],
  declarations: [NotifmembrePage]
})
export class NotifmembrePageModule {}
