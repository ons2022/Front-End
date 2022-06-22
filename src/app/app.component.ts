
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { UtilService } from './util.service';
import{HttpClientModule}from'@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  public appPages = [
    { title: 'Consulter annances', url: '/categorie', icon: 'mail' },
    { title: 'Ajouter annance', url: '/categorie', icon: 'add' },
    { title: 'Profile', url: '/user', icon: 'person' },

  ];
  public appPages_admin = [
    { title: 'Consulter annances', url: '/categorie', icon: 'mail' },
    { title: 'Ajouter annance', url: '/categorie', icon: 'add' },
    { title: 'Profile', url: '/user', icon: 'person' },

  ];
  email: any;
  


  constructor(public route : Router,    private storage: Storage, private _shart:UtilService
    ) {}

    ngOnInit() {
      this.storage.create();
      this.storage.get("email").then((val) =>{
        console.log("testttt ",val);
        this.email=val;
      })

    }

  logout(){
    this.storage.remove('token').then((val)=>{
      this.storage.remove('email').then((val)=>{
  
      })
      this.route.navigate(['/login']);

    })
  }
  
    }
   //logout al app lkol 
    






  
