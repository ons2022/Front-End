import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.page.html',
  styleUrls: ['./addoffre.page.scss'],
})
export class AddoffrePage implements OnInit {
  nameEmploi: any;
  annoceEmploi : any;
  villeEmploi:any;
  imageEmploi : any;
  dateEmploi:any;
  emailUser : any ; 
  nomCategorie : any ; 
  priceEmploi: any;
  
  constructor(
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage, 
  ) { }
 
  ngOnInit() {
    this.storage.create();
    this.storage.get("token").then((val) => {
      console.log(val);
    })

  }

  getemailUser(Emploi){
    this.emailUser=Emploi;
  }

  getnomCategorie(Emploi){
    this.nomCategorie=Emploi;
  }


  getnameEmploi(Emploi){
    this.nameEmploi=Emploi;
  }

  
 
  getEmploiville(Emploi){
    this.villeEmploi=Emploi;
  }
  
getpriceEmploi(Emploi){
  this.priceEmploi=Emploi;
}
  
  getimageEmploi(Emploi){
    this.imageEmploi =Emploi;
  }

  getdateEmploi(Emploi){
    this.dateEmploi =Emploi;
  }
  
add(){
  var data; 

  let postData = {
    "emailUser": this.emailUser,
    "nomCategorie": this.nomCategorie,
    "nameEmploi": this.nameEmploi,
    "imageEmploi": this.imageEmploi,
    "priceEmploi": "",
    "dateEmploi": this.dateEmploi,
    "annonceEmploi" : "",
    "villeEmploi": this.villeEmploi,
   }

   console.log("data",postData)

   this.httpClient.post("http://127.0.0.1:8000/addNewEmploi/", postData)
   .subscribe(data => {
     console.log(data);
      
    })

}


}



