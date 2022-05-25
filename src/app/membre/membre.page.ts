import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public membre =[] ;

  neufs: any;

  constructor(
    public httpClient: HttpClient,
    private data: DataService,
    public navCtrl: NavController,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.membre= this.data.getVoitures();

    this.httpClient.get("http://127.0.0.1:8000/getListOfMembre/")
    .subscribe(data => {
      console.log(data);

      this.neufs=data;
   
      console.log("new", this.neufs)
    })
  }

}
