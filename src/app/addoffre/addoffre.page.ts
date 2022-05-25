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
  descreption : any ; 
  

  constructor(
    private navCtrl: NavController, 
    public httpClient: HttpClient,
  ) { }
 
  ngOnInit() {

  }



  getEmploititle(Emploi){
    this.nameEmploi=Emploi;
  }
 
  getEmploiville(Emploi){
    this.villeEmploi=Emploi;
  }
  getEmploicity(Emploi){
    this.annoceEmploi =Emploi;
  }


  getEmploiimage(Emploi){
    this.imageEmploi =Emploi;
  }

  getEmploidatedate(Emploi){
    this.dateEmploi =Emploi;
  }


  getEmploidescreption(Emploi){
    this.descreption =Emploi;
  }

add(){
  var data; 


  let postData = {
    "nameEmploi": this.nameEmploi,
    " annoceEmploi" : this. annoceEmploi,
    "villeEmploi": this.villeEmploi,
    "imageEmploi": this.imageEmploi,
    " dateEmploi": this. dateEmploi,
    " descreption": this. descreption,


  
   }

   console.log("data",postData)

   this.httpClient.post("http://127.0.0.1:8000/addNewEmploi/", postData)
   .subscribe(data => {
     console.log(data);
      
    })

}


}

function getData(arg0: string, getData: any) {
  throw new Error('Function not implemented.');
}
