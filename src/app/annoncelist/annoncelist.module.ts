import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncelistPageRoutingModule } from './annoncelist-routing.module';

import { AnnoncelistPage } from './annoncelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncelistPageRoutingModule
  ],
  declarations: [AnnoncelistPage]
})
export class AnnoncelistPageModule {}
