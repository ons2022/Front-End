import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { UtilService } from './util.service';
import{HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     AppRoutingModule ,
   
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
