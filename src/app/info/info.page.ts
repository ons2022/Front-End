import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {HttpHeaders } from '@angular/common/http';
import { IonSearchbar } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import {ToastController  } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public materiel =[] ;
  info : any ; 
  nameMatrInformatique:any;
  totalinfo: any ; 
  isLoading=false;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public http: HttpClient,
    public httpClient: HttpClient,
    private data: DataService,
    private storage: Storage,
    private route: Router,
    public toastController: ToastController,
    public alertController: AlertController,
    
  ) { 
    
   
  }
  loadData(event) {
    var data
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length === 99) {
        event.target.disabled = true;
      }
    }, 100);
  }

 
  
  ngOnInit() {
    this.getmateriel();
  }
  
//present loading
    async loadingPresent() {
      this.isLoading = true;
      return await this.loadingCtrl.create({
        message: '',
        spinner: 'circles' 
      }).then(a => {
        a.present().then(() => {
          console.log('loading presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort laoding'));
          }
        });
      });
    }
    //dismiss loading
  
    async loadingDismiss() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('loading dismissed'));
    }

getmateriel(){
this.loadingPresent();
    this.httpClient.get<any>("http://127.0.0.1:8000/getMaterielleInformatique/")
    .subscribe(data => {
      this.loadingDismiss();
      console.log(data);

      this.info=data.results; 
      this.totalinfo=data.results;
      
    },error => {this.loadingDismiss();})
  
}
getnameMatrInformatique(nameMatrInformatique){
  this.nameMatrInformatique=nameMatrInformatique;

}
async notif(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}
search(){
  if (!this.nameMatrInformatique) {
    this.info=this.totalinfo;
  }else{
    var data;
    data= {
     "nameMatrInformatique": this.nameMatrInformatique,
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
    this.httpClient.post<any>("http://127.0.0.1:8000/searchMaterielleInformatiqueByName/", data)
    .subscribe(data => {
    console.log(data);
    this.info=data.data ;


    
     }
     , error =>{
      this.notif("does not exist");
     }) 
     
    }) 
  }

}

}




    



