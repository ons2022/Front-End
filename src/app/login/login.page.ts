
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
  passwordUser : any;
  emailUser: any;
  
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

  }
  private fooSubject = new Subject<any>();

  publishSomeData(data: any) {
      this.fooSubject.next(data);
  }
  getPassword(password){
    this.passwordUser=password;
  }
  getEmail(email){
    this.emailUser=email;
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
    // Enabling Side Menu ki tecliki alihom yatlaalek el menu 
    //  this.util.setMenuState(true);
    //  this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });


    // data= {
    //   "emailUser":    this.email,
    //   "passwordUser": this.password
    //   }


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailUser)){
      console.log("email valid");
      

      let postData = {
        "emailUser": this.emailUser,
        "passwordUser": this.passwordUser
      }
       console.log("data",postData)

      this.httpClient.post<any>("http://127.0.0.1:8000/loginUser/", postData)
          .subscribe(data => {
            console.log(data);
            if (data.token) {
                this.storage.set("token",data.token);
                this.storage.set("email",data.email);
              if (this.emailUser=="admin2@admin.com") {
                this.route.navigate(['/admin'])
              }else{
                this.route.navigate(['/homemembre'])
              }
            }else if (data=="Please wait  !!for your account is not  activated") {
              this.notif("Please wait your!! account is not  activated");
            }
            else{
              this.notif("Login et / ou Mot de passe erroné");
            }


             
           }) 
  
      console.log("email ",this.emailUser,"pass ",this.passwordUser);
  
    }else{
      this.notif("Email non valid");

    }
   
  }

}


