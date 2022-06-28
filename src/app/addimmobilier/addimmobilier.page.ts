import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import {ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addimmobilier',
  templateUrl: './addimmobilier.page.html',
  styleUrls: ['./addimmobilier.page.scss'],
})
export class AddimmobilierPage implements OnInit {

  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private route: Router,
  ) { }
  nomCategorie:any;
  nameImmobilier: any; 
  imageImmobilier: any; 
  priceImmobilier: any; 
  dateImmobilier: any; 
  annoceImmobilier: any; 
  villeImmobilier: any; 
  ngOnInit() {
  }
  getnomCategorie( nomCategorie){
    this.nomCategorie= nomCategorie;
  }
  getnameImmobilier( nameImmobilier){
    this.nameImmobilier=  nameImmobilier;
  }
  getimageImmobilier(imageImmobilier){
    this.imageImmobilier=  imageImmobilier;
  }
  getpriceImmobilier( priceImmobilier){
    this.priceImmobilier= priceImmobilier;
  }
  getdateImmobilier(dateImmobilier){
    this.dateImmobilier= dateImmobilier;
  }
  getannoceImmobilier(annoceImmobilier){
    this.annoceImmobilier=annoceImmobilier;
  }
  getvilleImmobilier(villeImmobilier){
    this.villeImmobilier=villeImmobilier;
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
          "nameImmobilier" : this.nameImmobilier,
          "imageImmobilier":this.imageImmobilier,
          "priceImmobilier": this. priceImmobilier,
          "dateImmobilier": this.dateImmobilier,
          "annoceImmobilier": this.annoceImmobilier,
          "villeImmobilier": this.villeImmobilier,
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
        this.httpClient.post<any>("http://127.0.0.1:8000/addNewImmobilier/", data,headers)
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
