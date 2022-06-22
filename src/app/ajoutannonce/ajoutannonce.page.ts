import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-ajoutannonce',
  templateUrl: './ajoutannonce.page.html',
  styleUrls: ['./ajoutannonce.page.scss'],
})
export class AjoutannoncePage implements OnInit {

  emailUser: any;
  nomMarque : any;
  imageMarque:any;
  nomVoiture: any;
  disponible:any;
  prix:any;
  image:any;
  nomCateg: any;



  constructor( private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,

  ) {
    
   }

  ngOnInit() {

   
    this.storage.create();
    this.storage.get("token").then((val) => {
      console.log(val);
    })
    
  }


  getemailUser(emailUser){
    this.emailUser=emailUser;
  }




  getnomMarque(nomMarque){
    this.nomMarque=nomMarque;
  }
  getnomCateg(nomCateg){
    this.nomCateg=nomCateg;
  }


  getimageMarque(imageMarque){
    this.imageMarque=imageMarque;
  }


  getnomVoiture(nomVoiture){
    this.nomVoiture=nomVoiture;
  }



  getdisponible(disponible){
    this.disponible=disponible;
  }


  getprix(prix){
    this.prix=prix;
  }

  getimage(image){
    this.image=image;
  }
  add() {


    let postData = {
      "emailUser": this.emailUser,
      "nomMarque" : this.nomMarque,
      "imageMarque": "",
      "nomVoiture": this. nomVoiture,
      "disponible": this.disponible,
      "prix": this.prix,
      "image": this.image,

    }


    console.log("data",postData)



    this.httpClient.post("http://127.0.0.1:8000/addNewCar/", postData)
    .subscribe(data => {
      console.log(data);
     }) 

  }
}
