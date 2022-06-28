import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import {ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutannonce',
  templateUrl: './ajoutannonce.page.html',
  styleUrls: ['./ajoutannonce.page.scss'],
})
export class AjoutannoncePage implements OnInit {

  nomCategorie: any;
  nameMatrInformatique : any;
  imageMatrInformatique :any;
  priceMatrInformatique: any;
  dateMatrInformatique:any;
  annoceMatrInformatique:any;
  villeMatrInformatique:any;
  info:any;
  
  constructor( 
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private route: Router,

  ) {
    
   }

  ngOnInit() {
    this.storage.create();
    this.storage.get("token").then((val) => {
      console.log(val);
    }) 
  }
  getnomCategorie( nomCategorie){
    this.nomCategorie= nomCategorie;
  }
  getnameMatrInformatique( nameMatrInformatique){
    this.nameMatrInformatique=  nameMatrInformatique;
  }
  getimageMatrInformatique(imageMatrInformatique){
    this.imageMatrInformatique=  imageMatrInformatique;
  }
  getpriceMatrInformatique( priceMatrInformatique){
    this.priceMatrInformatique= priceMatrInformatique;
  }
  getdateMatrInformatique( dateMatrInformatique){
    this. dateMatrInformatique=dateMatrInformatique
  }
  getannoceMatrInformatique(annoceMatrInformatique){
    this.annoceMatrInformatique=annoceMatrInformatique;
  }
  getvilleMatrInformatique(  villeMatrInformatique){
    this.villeMatrInformatique=  villeMatrInformatique;
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
          "nameMatrInformatique" : this.nameMatrInformatique,
          "imageMatrInformatique":this.imageMatrInformatique,
          "priceMatrInformatique": this.priceMatrInformatique,
          "dateMatrInformatique": this.dateMatrInformatique,
          "annoceMatrInformatique": this.annoceMatrInformatique,
          "villeMatrInformatique": this.villeMatrInformatique,
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
        this.httpClient.post<any>("http://127.0.0.1:8000/addNewMaterielleInformatique/", data,headers)
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


  

