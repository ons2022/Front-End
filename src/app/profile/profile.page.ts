import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
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


  

}
