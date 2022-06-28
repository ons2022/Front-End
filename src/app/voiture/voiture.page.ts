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
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public Voitures =[] ;
  public marque  =[] ;
  comments = [];
  neufs: any;
  nomVoiture: any ; 
  image: any ;
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


    loadData(event) {
      var data 
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (data.length === 100) {
          event.target.disabled = true;
        }
      }, 500);
    }
  
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
  ngOnInit() {
    this.getvoiture();

  }
   
  getvoiture(){
    this.httpClient.get<any>("http://127.0.0.1:8000/getAnnonceVoiture/")
    .subscribe(data => {
      console.log(data);
      this.neufs=data.results
      this.neufs.forEach(voiture => {
        voiture.image='data:image/jpeg;base64,'+voiture.image.substring(2).slice(0, -1);;
      });
      console.log("new", this.Voitures)
    })}

    async notif(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }

    getnomVoiture(nomVoiture){
      this.nomVoiture=nomVoiture;
    }
    getimage(image){
      this.image=this.image;

    }

    search(){
      if (!this.nomVoiture) {
      console.log("new", this.Voitures)
        this.Voitures=this.nomVoiture;
        this.image=this.image;

      }else{
        var data;
        data= {
         "nomVoiture": this.nomVoiture,
         "image":this.image,
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
        this.httpClient.post<any>("http://127.0.0.1:8000/searchCarsNewByName/", data)
        .subscribe(data => {
        console.log(data);
        this.neufs=data.data;
        this.neufs.forEach(voiture => {
          voiture.image='data:image/jpeg;base64,'+voiture.image.substring(2).slice(0, -1);;
        });
         }
         , error =>{
          this.notif("does not exist");
         }) 
         
        }) 
      }
    }

}
