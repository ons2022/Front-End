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
  selector: 'app-immobilier',
  templateUrl: './immobilier.page.html',
  styleUrls: ['./immobilier.page.scss'],
})
export class ImmobilierPage implements OnInit {
  public immobilier =[] ;
  immob: any;
  nameImmobilier : any ;
  totalimmo : any ;
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
 
    
  ) { }

  ngOnInit() {
    this.getimmob();
    

  }
  
 
  
  getimmob(){
        this.httpClient.get<any>("http://127.0.0.1:8000/getImmobilierWithScrappingMethod/?page=3")
        .subscribe(data => {
          console.log(data);
          this.immob=data.results;
          this.totalimmo =data.results;
        
        })
        }
  
        async notif(msg) {
          const toast = await this.toastController.create({
            message: msg,
            duration: 2000
          });
          toast.present();
        }
        getnameImmobilier(nameImmobilier){
          this.nameImmobilier=nameImmobilier;
        }
        
        search(){
          if (!this.nameImmobilier) {
            this. immob=this.totalimmo;
          }else{
            var data;
            data= {
             "nameMatrInformatique": this.nameImmobilier,
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
            this.httpClient.post<any>("http://127.0.0.1:8000/searchImmobilierByName/", data)
            .subscribe(data => {
            console.log(data);
            this.immob=data.data ;
             }
             , error =>{
              this.notif("does not exist");
             }) 
             
            })
           }
          }

}
       
