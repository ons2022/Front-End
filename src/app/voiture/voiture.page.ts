
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { IonInfiniteScroll } from '@ionic/angular';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core'
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.page.html',
  styleUrls: ['./voiture.page.scss'],
})
export class VoiturePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public Voitures =[] ;
  public marque  =[] ;
  comments = [];

  neufs: any;
  
  
  
  
  constructor(  
    public httpClient: HttpClient,
    private data: DataService,
    public navCtrl: NavController,
    public http: HttpClient,
    
    
    ) { }


    


  
  

  ngOnInit() {
    this.getvoiture();

  }
    
   
  getvoiture(){
    this.httpClient.get("http://127.0.0.1:8000/getAnnonceVoiture/")
    .subscribe(data => {
      console.log(data);

      this.neufs=data;
      this.neufs.forEach(voiture => {
        voiture.image='data:image/jpeg;base64,'+voiture.image.substring(2).slice(0, -1);;
      });
      console.log("new", this.neufs)
    })}


    // this.marque= this.data.getmarque();
   // getmarque(){
    //this.httpClient.get("http://127.0.0.1:8000/getMarque/")
    //.subscribe(data => {
      //console.log(data);
      //this.neufs=data;
      
    //})
  //}

}
