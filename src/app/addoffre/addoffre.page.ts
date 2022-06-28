import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import {ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.page.html',
  styleUrls: ['./addoffre.page.scss'],
})
export class AddoffrePage implements OnInit {
  nameEmploi: any;
  annoceEmploi : any;
  imageEmploi : any;
  dateEmploi:any;
  nomCategorie : any ; 
  priceEmploi: any;
  annonceEmploi : any ; 
  villeEmploi : any ; 
  
  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    private route: Router,
    public toastController: ToastController,
  ) { }
 
  ngOnInit() {

  }

getnomCategorie(nomCategorie){
    this.nomCategorie=nomCategorie;
  }
getnameEmploi(nameEmploi){
    this.nameEmploi=nameEmploi;
  }
getvilleEmploi(villeEmploi){
    this.villeEmploi=villeEmploi;
  }
getpriceEmploi(priceEmploi){
  this.priceEmploi=priceEmploi;
} 
getimageEmploi(imageEmploi){
    this.imageEmploi=imageEmploi;
  }
  getannoceEmploi(annonceEmploi){
  this.annonceEmploi=annonceEmploi;

}
getdateEmploi(dateEmploi){
    this.dateEmploi =dateEmploi;
  }
  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  back(){

    this.storage.get("token").then((val) =>{
      let email;
      email=val;
      console.log(email)
    if (email=="octanet") {
      this.route.navigate(['/folder/home'])  
    }else{
      this.route.navigate(['/home'])  
    }
  })
  }
add(){
  var data;
  data= {
    "nomCategorie": this.nomCategorie,
    "nameEmploi": this.nameEmploi,
    "imageEmploi": this.imageEmploi,
    "priceEmploi": this.priceEmploi,
    "dateEmploi": this.dateEmploi,
    "annoceEmploi":this.annonceEmploi, 
    "villeEmploi": this.villeEmploi,
   }
   this.storage.get("token").then((val) =>{
    let token=val;
    console.log(token);
  const headers ={
    headers: new HttpHeaders({
      'Authorization':'token '+token
    })
  }

   console.log("data",data)
   this.httpClient.post<any>("http://127.0.0.1:8000/addNewEmploi/",data,headers)
   .subscribe(data => {
     console.log(data);
     this.notif("done");
    }
     , error =>{
      this.notif("you should have an account!! Required Field !!" );
     })  
    })


}

}