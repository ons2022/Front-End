import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: any;
  password: any;
  username: any;
  confPassword: any;
  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    public httpClient: HttpClient,
    public toastController: ToastController,
    public route: Router,
  ) { }

  ngOnInit() {
  }

  getPassword(password) {
    this.password = password;
  }
  getConfPassword(val) {
    this.confPassword = val;
  }
  getemail(email) {
    this.email = email;
  }
  getusername(username) {
    this.username = username;
  }
  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  signup() {
    if (this.email && this.password && this.confPassword && this.username) {
      if (this.confPassword != this.password) {
        this.notif("Confirmation incorrecte")
      }
      else {

        var data;
        /*  Enabling Side Menu 
         this.util.setMenuState(true);
         this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });*/
        //data 
        data = {
          "email": this.email,
          "password": this.password,
          "username": this.username,
        }
        let postData = {
          "emailUser": this.email,
          "username": this.username,
          "password": this.password,

        }
        console.log("data", postData)

        this.httpClient.post("http://127.0.0.1:8000/registerUser/", data)
          .subscribe(data => {
            console.log(data["status"]);
            if (data["status"] == "fail") {
              // console.log("Stay here")
              this.notif("We have this account try again !!!");

            }
            else {
              this.route.navigate(['/home'])
            }
          })

        this.notif("  waite for your avtivation ");
        console.log("email ", this.email, "pass ", this.password, "username ", this.username);//required  
      }
    }

    else {
      this.notif("try again")

    }

  }
}
