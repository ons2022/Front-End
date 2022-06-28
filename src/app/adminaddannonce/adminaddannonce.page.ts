import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import {ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-adminaddannonce',
  templateUrl: './adminaddannonce.page.html',
  styleUrls: ['./adminaddannonce.page.scss'],
})
export class AdminaddannoncePage implements OnInit {
  nomCategorie:any;
  nameImmobilier: any; 
  imageImmobilier: any; 
  priceImmobilier: any; 
  dateImmobilier: any; 
  annoceImmobilier: any; 
  villeImmobilier: any; 



  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }


  
}
