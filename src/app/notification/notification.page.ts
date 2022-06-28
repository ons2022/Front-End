import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notifications =[] ;
    token: any;
    notif : any ;

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
  
      this.httpClient.get<any>("http://127.0.0.1:8000/getNotifications/",headers)
      .subscribe(data => {
        console.log(data);
        this.notif=data.data;
        console.log("new", this.notif)
      })
  
    })
  
    }
  
  }
  