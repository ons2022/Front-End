
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public ListOfUser = [];
  email: any;
  user: Object;
  token: any;
  voitureNotActivat: any;
  nomVoiture: any;




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
    this.storage.get("token").then((val) => {
      let token = val;
      this.token = token;
      console.log(token);

      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      }

      this.httpClient.get<any>("http://127.0.0.1:8000/getListOfUserNotActivate/", headers)
        .subscribe(data => {
          console.log(data);
          this.user = data.data;
          console.log("new", this.user)
        })

      this.httpClient.get<any>("http://127.0.0.1:8000/getVoitureNeufNotactivationOfAdmin/", headers)
        .subscribe(data => {
          console.log(data);
          this.voitureNotActivat = data.data;
          console.log("new", this.user)
        })

    })

  }

  activate(email) {
    let postData = {
      "email": email,
    }
    this.storage.get("token").then((val) => {
      let token = val;
      console.log(token);
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      }

      console.log("data", postData)

      this.httpClient.post("http://127.0.0.1:8000/activationAccount/", postData, headers)
        .subscribe(data => {
          console.log(data);
          this.notif("the user is activated");
          this.httpClient.get<any>("http://127.0.0.1:8000/getListOfUserNotActivate/", headers)
            .subscribe(data => {
              console.log(data);
              this.user = data.data;
              console.log("new", this.user)
            })

          // this.getUsers();
        }

        )
      this.notif("try again!!!");
    })
  }

  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  message() {
    this.notif("user is deleted ");

  }

  delete(email) {
    var data = {
      "email": this.email,
    }
    this.storage.get("token").then((val) => {
      let token = val;
      console.log(token);
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      }
      console.log("data", data)
      this.httpClient.delete("http://127.0.0.1:8000/deleteUserUsingAdmin/?email=" + email, headers)
        .subscribe(data => {
          console.log(data);
          this.httpClient.get<any>("http://127.0.0.1:8000/getListOfUserNotActivate/", headers)
            .subscribe(data => {
              console.log(data);
              this.user = data.data;
              console.log("new", this.user)
            })
          this.notif("done");
        }
          , error => {
            this.notif("try again !!");
          })


    })

  }

  deletevoiture(nomVoiture) {
    var data = {
      "nomVoiture": nomVoiture,
    }
    this.storage.get("token").then((val) => {
      let token = val;
      console.log(token);
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      }
      console.log("data", data)
      this.httpClient.delete("http://127.0.0.1:8000/deleteNewCar/?nomVoiture=" + nomVoiture, headers)
        .subscribe(data => {
          console.log(data);
          this.notif("done");
        }
          , error => {
            this.notif("try again !!");
          })


    })

  }

  activatevoiture(nomVoiture) {
    let postData = {
      "nomVoiture": nomVoiture,
    }
    this.storage.get("token").then((val) => {
      let token = val;
      console.log(token);
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      }

      console.log("data", postData)

      this.httpClient.post("http://127.0.0.1:8000/activationVoitureNeufByAdmin/", postData, headers)
        .subscribe(data => {
          console.log(data);
          this.notif("annonce is activated");
          // this.getUsers();
        }

        )
      this.notif("try again!!!");
    })
  }



}




