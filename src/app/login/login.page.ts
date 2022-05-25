
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

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
    public toastController: ToastController
  ) { }

  ngOnInit() {
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

      this.httpClient.post("http://127.0.0.1:8000/loginUser/", postData)
          .subscribe(data => {
            console.log(data);
            if (data=="Welcome admin this your account and please take care for your users ()! "
            || data=="Welcome in our application" 
             ) {
              if (this.emailUser=="admin2@admin.com") {
                this.route.navigate(['/admin'])
              }else{
                this.route.navigate(['/home'])
              }
            }else if (data=="Please wait  for your account is not  activated") {
              this.notif("Please wait your account is not  activated");
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


