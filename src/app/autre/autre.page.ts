import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-autre',
  templateUrl: './autre.page.html',
  styleUrls: ['./autre.page.scss'],
})
export class AutrePage implements OnInit {
  token: any;
  cat : any ; 
  public Listcat=[] ;
  nomCategorie: any ; 

  constructor(
    public httpClient: HttpClient,
    private data: DataService,
    public navCtrl: NavController,
    private storage: Storage,
    private route: Router,
    public http: HttpClient,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.storage.get("token").then((val) =>{
      let token=val;
      this.token=token;
      console.log(token);

    const headers ={
      headers: new HttpHeaders({
        'Authorization': 'token '+token
      })
    }

    this.httpClient.get<any>("http://127.0.0.1:8000/getCategorie/",headers)
    .subscribe(data => {
      console.log(data);
      this.cat=data.data;
      console.log("new", this.cat)
    })

})
}

async notif(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

getnomCategorie(nomCategorie){
  this.nomCategorie=nomCategorie;
}


delete(nom){

  this.storage.get("token").then((val) =>{
    let token=val;
    console.log(token);
  const headers ={
    headers: new HttpHeaders({
      'Authorization': 'token '+token
    })
  } 
  console.log("data",nom)
  this.httpClient.delete("http://127.0.0.1:8000/deleteCategorie/?nomCategorie=" + nom, headers)
  .subscribe(data => {
  console.log(data);
  this.notif("done");
   }
   , error =>{
    this.notif("done!!");
   }) 
   
  }) 

}
}
