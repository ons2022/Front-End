
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public ListOfUser=[] ;
  emailUser: any;
  user: Object;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    public httpClient: HttpClient,
    public toastController: ToastController
    ) { }

  ngOnInit() {
   
    this.getUsers();
  }
  getUsers(){
    this.httpClient.get("http://127.0.0.1:8000/getListOfUser/")
    .subscribe(data => {
      console.log(data);
      this.user=data;
    })
  }
  
  getannone(){
    this.httpClient.get("***")
    .subscribe(data => {
      console.log(data);
      this.user=data;
    })
  }
  activate(email){
    let postData = {
      "emailUser": email,
    }
    console.log("data",postData)
  
    this.httpClient.post("http://127.0.0.1:8000/activationAccount/", postData)//activate account 
    .subscribe(data => {
      console.log(data);
      this.notif("the user is activated");
      this.getUsers();
     }) 
  }
  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  message(){
    this.notif("user is deleted ");
  
  }

  delete(email){
    let postData = {
      "emailUser": email,
    }
    console.log("data",postData)
  
    this.httpClient.delete("http://127.0.0.1:8000/deleteUserWithAdmin?emailUser="+email) 
    .subscribe(data => {
      console.log(data);
      this.notif("user is deleted ");
      this.deleteUsers();
     }) 
  }

  deleteUsers() {
    throw new Error('Method not implemented.');
  }
  async notif1(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
   }

}
