import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import {ToastController  } from '@ionic/angular';
@Component({
  selector: 'app-addcategrie',
  templateUrl: './addcategrie.page.html',
  styleUrls: ['./addcategrie.page.scss'],
})
export class AddcategriePage implements OnInit {
  nomCategorie: any;
  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    public toastController: ToastController,

  ) { }

  ngOnInit() {
  }
  getnomCategorie( nomCategorie){
    this.nomCategorie= nomCategorie;
  }

  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  add(){
      
    var data;
    data= {
      "nomCategorie": this.nomCategorie,
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
    this.httpClient.post<any>("http://127.0.0.1:8000/addCategorieUsingAdmin/", data,headers)
    .subscribe(data => {
    console.log(data);
    this.notif("done");
     }
     , error =>{
      this.notif("try again !!");
     }) 
     
    }) 

}
}