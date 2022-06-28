import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.page.html',
  styleUrls: ['./addcar.page.scss'],
})
export class AddcarPage implements OnInit {
  nomMarque: any;
  nomCategorie: any;
  nomVoiture: any;
  disponible: any;
  prix: any;
  imageMarque: any;
  image: any;
  email: any;

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    public httpClient: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private route: Router,
  ) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get("token").then((val) => {
      console.log(val);
    })
  }
  getnomCategorie(nomCategorie) {
    this.nomCategorie = nomCategorie;
  }
  getnomVoiture(nomVoiture) {
    this.nomVoiture = nomVoiture;
  }
  getdisponible(disponible) {
    this.disponible = disponible;
  }
  getprix(prix) {
    this.prix = prix;
  }
  getnomMarque(nomMarque) {
    this.nomMarque = nomMarque;
  }
  getimageMarque(imageMarque) {
    this.imageMarque = imageMarque;
  }
  getimage(image) {
    this.image = image;
  }
  async notif(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  getemail(email) {
    this.email = email;
  }

  back() {

    this.storage.get("token").then((val) => {
      let email;
      email = val;
      console.log(email)
      if (email == "octanet") {
        this.route.navigate(['/folder/home'])


      } else {
        this.route.navigate(['/home'])

      }
    })
  }
  add() {
    var data;
    data = {
      "nomCategorie": this.nomCategorie,
      "nomMarque": this.nomMarque,
      "imageMarque": this.imageMarque,
      "image": this.image,
      "prix": this.prix,
      "disponible": this.disponible,
      "nomVoiture": this.nomVoiture,
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
      this.httpClient.post<any>("http://127.0.0.1:8000/addNewCar/", data, headers)
        .subscribe(data => {
          console.log(data);
          this.notif("done");
        }
          , error => {
            this.notif("you should have an account!! Required Field !!");


          })

    })
  }

}
