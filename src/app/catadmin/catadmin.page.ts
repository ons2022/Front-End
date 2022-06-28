import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-catadmin',
  templateUrl: './catadmin.page.html',
  styleUrls: ['./catadmin.page.scss'],
})
export class CatadminPage implements OnInit {
  token: any;
  cat : any ; 
  public Listcat=[] ;
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
}