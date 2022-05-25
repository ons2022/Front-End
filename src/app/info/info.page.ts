import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public materiel =[] ;
  info : any ; 
  constructor(
    public httpClient: HttpClient,
    private data: DataService,
    public navCtrl: NavController,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.getmateriel();
  }


getmateriel(){

    this.httpClient.get("http://127.0.0.1:8000/getMaterielleInformatique/")
    .subscribe(data => {
      console.log(data);

      this.info=data;
      
      
    })
  
}
}

