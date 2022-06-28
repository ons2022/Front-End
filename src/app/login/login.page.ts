
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController  } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password : any;
  email: any;
  type: boolean = true;
  
  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    public route : Router,
    public toastController: ToastController,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get("token").then((val) =>{
      console.log("testttt ",val);
      if (val) {
        this.route.navigate(['/folder/home'])
      }
    })


  }
  
  changeType() {
    this.type = !this.type;
  }
  private fooSubject = new Subject<any>();

  publishSomeData(data: any) {
      this.fooSubject.next(data);
  }
  getpasswordUser (password ){
    this.password  =password  ;
  }
  getEmail(email){
    this.email=email;
  }

  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login() {
    var data;
     data= {
      "username":    this.email,
     "password": this.password ,
     }

     console.log("data",data)

 
    this.httpClient.post<any>("http://127.0.0.1:8000/loginUser/", data)
        .subscribe(data => {
        console.log(data);
        this.storage.set('token', data.token);
        this.storage.set('email', this.email);
        if (this.email=="octanet") {
          this.route.navigate(['/folder/home'])  
        }else{
          this.route.navigate(['/home'])  
        }
                         
         }, error =>{
          this.notif(" try again!!!! ");
         }) 
         
        

    }
    
   
  }




