import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
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
  stars:number;
  nameMatrInformatique:any;
  isLoading=false;
  

  constructor(

    public httpClient: HttpClient,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public http: HttpClient,
    
  
  ) { 
    
    this.stars=0;
  }

 
  starClicked(i:number){
      this.stars=i;
  
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
    this.httpClient.get("http://127.0.0.1:8000/getMaterielleInformatique/")
    .subscribe(data => {
      this.loadingDismiss();
      console.log(data);

      this.info=data;
      
      
    },error => {this.loadingDismiss();})
  
}

getnameMatrInformatique(password){
  this.nameMatrInformatique=password;
}
search(){
let postData = {
  "nameMatrInformatique": this.nameMatrInformatique,
  

}
 console.log("data",postData)


this.httpClient.post("http://127.0.0.1:8000/searchMaterielleInformatiqueByName/", postData)
    .subscribe(data => {
      console.log(data);
       
     })
    }

    loadData(event) {
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
      }, 500);
    }
  
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    

}

