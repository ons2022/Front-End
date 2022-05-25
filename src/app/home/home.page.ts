import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


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

  constructor(
    private data: DataService,
    public httpClient: HttpClient,
    public router: Router,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
   
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();

    
    this.httpClient.get("http://127.0.0.1:8000/getVoitureNeuf/")
    .subscribe(data => {
      console.log(data);
      this.neufs=data;
    })
  }



}

