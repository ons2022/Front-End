import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import {  ToastController  } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  /*
  emailUser: any;
  firstNameUser : any;
  lastNameUser:any;
  passwordUser : any;
  dateOfBirth:any;
  addressUser:any;
  telUser:any;*/


  constructor(private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
  }
  /*
  getPassword(password){
    this.passwordUser=password;
  }
 
  getemailUser(emailUser){
    this.emailUser=emailUser;
  }
  getfirstNameUser(firstNameUser){
    this.firstNameUser=firstNameUser;
  }
  getlastNameUser(lastNameUser){
    this.lastNameUser=lastNameUser;
  }
  getdateOfBirth(dateOfBirth){
    this.dateOfBirth=dateOfBirth;
  }
  getaddressUser(addressUser){
    this.addressUser=addressUser;
  }
  gettelUser(telUser){
    this.telUser=telUser;
  }

  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  signup() {
    var data;
    // Enabling Side Menu ki tecliki alihom yatlaalek el menu 
    // this.util.setMenuState(true);
    // this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });


    // data= {
    //   "emailUser":    this.email,
    //   "passwordUser": this.password
    //   }


  

    let postData = {
      "emailUser": this.emailUser,
      "firstNameUser" : this.firstNameUser,
      "lastNameUser": this.lastNameUser,
      "telUser": this. telUser,
      "dateOfBirth": this.dateOfBirth,
      "passwordUser": this.passwordUser,
      "addressUser": this.addressUser,

    }
     console.log("data",postData)

 
    this.httpClient.post("http://127.0.0.1:8000/registerUser/", postData)
        .subscribe(data => {
        console.log(data);
           
         }) 
         
          this.notif("  waite for your avtivation ");
    
        

   // console.log("email ",this.emailUser,"pass ",this.passwordUser);

  }

}

function getData(arg0: string, getData: any) {
  throw new Error('Function not implemented.');*/
}

