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
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public membre =[] ;
  neufs: any;
  username: any;
  token: any;
  totalMembres: any;
  email : any ; 
  alertCtrl : any ;
  items  : any ;

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
    this.membre= this.data.getVoitures();

    this.storage.get("token").then((val) =>{
      let token=val;
      this.token=token;
      console.log(token);

    const headers ={
      headers: new HttpHeaders({
        'Authorization': 'token '+token
      })
    }

    
    this.httpClient.get<any>("http://127.0.0.1:8000/getListOfMembre/",headers)
    .subscribe(data => {
      console.log(data);

      this.neufs=data.data;
      this.totalMembres=data.data;
   
      console.log("new", this.neufs)
    })
  })
  }

  getusername(username){
    this.username=username;
  }
  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  search(){
    if (!this.username) {
      this.neufs=this.totalMembres;
    }else{
      var data;
      data= {
       "username": this.username,
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
      this.httpClient.post<any>("http://127.0.0.1:8000/searchUser/", data,headers)
      .subscribe(data => {
      console.log(data);
      this.neufs=data.data;
       }
       , error =>{
        this.notif("does not exist");
       }) 
       
      }) 
    }
  }
  getemail(email){
    this.email=email;
  }
  
                  delete(email){
                    var data  = {
                      "email": this.email,
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
                    this.httpClient.delete("http://127.0.0.1:8000/deleteUserUsingAdmin/?email=" + email, headers)
                    .subscribe(data => {
                    console.log(data);
                    this.notif("done");
                     }
                     , error =>{
                      this.notif("try again !!");
                     }) 
                
                     
                    }) 
                
                  }
  showConfirmAlert(i) {
    let alert = this.alertCtrl.create({
        title: 'Confirm delete user',
        message: 'Are you sure you want to permanently delete this user?',
        buttons: [
            {
                text: 'No',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Yes',
                handler: (email) => {


                   




                }
            }
        ]
    })
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: ' <strong>are you sure ?this membre will be romoved </strong>!!!',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'YES',
          id: 'confirm-button',
          handler: () => {
           
            
          }
        }
      ]
    });

    await alert.present();
  }


  
  }
 

  


