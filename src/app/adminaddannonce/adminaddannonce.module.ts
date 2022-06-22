import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminaddannoncePageRoutingModule } from './adminaddannonce-routing.module';

import { AdminaddannoncePage } from './adminaddannonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminaddannoncePageRoutingModule
  ],
  declarations: [AdminaddannoncePage]
})
export class AdminaddannoncePageModule {}
