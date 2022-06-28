import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  public voiture  = [];
  searchTitle = '';
  neufs: Object;
  menu: any;

  constructor(
    private data: DataService,
    public httpClient: HttpClient,
    public router: Router,
    private storage: Storage,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
   /* this.storage.create();
      this.storage.get("token").then((val) =>{
        console.log("testttt ",val);
        if (!val) {
          // this.menuCtrl.enable(false);
          // this.menu=0;
          this.router.navigate(['/login']);
        }
      })*/

    
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();

    
   /* this.httpClient.get("http://127.0.0.1:8000/getVoitureNeuf/")
    .subscribe(data => {
      console.log(data);
      this.neufs=data;
    })*/
  }
  logout(){
    this.storage.remove('token').then((val)=>{
      this.storage.remove('email').then((val)=>{
  
      })
      this.router.navigate(['/login']);

    })
  }


}

