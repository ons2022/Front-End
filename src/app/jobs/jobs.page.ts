import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonSearchbar, NavController } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import {ToastController  } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  public job =[] ;
  offre: any;
  nameEmploi: any ; 
  constructor(
    public httpClient: HttpClient,
    private data: DataService,
    public navCtrl: NavController,
    private storage: Storage,
    private route: Router,
    public http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.getjobs();
  }
  
  getjobs(){
    
    this.httpClient.get<any>("http://127.0.0.1:8000/getEmploi/?page=3")
    .subscribe(data => {
      console.log(data);
      this.offre=data.results;
      this.offre.forEach(job => {
        job .image=job .image.substring(2).slice(0, -1);;
      });
    }) 
  }

  getnameEmploi(nameEmploi){
    this.nameEmploi=this.nameEmploi;
  }


  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
  search(){
    if (!this.nameEmploi) {
    console.log("new", this.job)
      this.job=this.nameEmploi;
    

    }else{
      var data;
      data= {
       "nameEmploi": this.nameEmploi
       
      }
      this.storage.get("token").then((val) =>{
        let token=val;
        console.log(token);
      const headers ={
        headers: new HttpHeaders({
          'Authorization': 'token '+token
        })
      } 
      console.log("data",data)
      this.httpClient.post<any>("http://127.0.0.1:8000/searchEmploiByName/", data)
      .subscribe(data => {
      console.log(data);
      this.offre=data.data;
      
       }
       , error =>{
        this.notif("does not exist");
       }) 
       
      }) 
    }
}
}
