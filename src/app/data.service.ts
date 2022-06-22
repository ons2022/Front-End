import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { VoiturePage } from './voiture/voiture.page';
// Category 
import { Chart } from 'chart.js';
import { Url } from 'url';

export interface ICategory {
  
  id: number,
  name: string,
  image: string,
}
export interface Ivoiture  {
  idVoiture: number,
  nomVoiture: string,
  image: string ,
  prix:number ,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getmateriel(): any[] {
    throw new Error('Method not implemented.');
  }
  getmembre(): any[] {
    throw new Error('Method not implemented.');
  }
  getimmobilier(): any[] {
    throw new Error('Method not implemented.');
  }
  getvalidation(): any[] {
    throw new Error('Method not implemented.');
  }
  getmarque(): any[] {
    throw new Error('Method not implemented.');
  }
  getdata(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getVoitures() {
    let  Voitures = [];

    let voi1: Ivoiture = {//exemple mouch kamel 
      idVoiture: 1,
      nomVoiture: 'dfgh',
      image: 'dfghj' ,
      prix:5 ,
      
    }
return  Voitures;
  }
getroot(){


}
  getCategories() {
    let categories = [];

   
    let cat2: ICategory = {
      id: 2,
      name: '',
      image: '../../assets/categories/immobilier22.png',
      
      
    }
    let cat4: ICategory = {
      id: 4,
      name: '',
      image: '../../assets/categories/soo.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: '',
      image: '../../assets/categories/voiture22.png'
    }
    
    let cat1: ICategory = {
      id: 1,
      name: '',
      image: '../../assets/categories/offremplode.png'
    }

    categories.push( cat2,cat1,cat3,cat4);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'souris-gaming',
      price: 28,
      image: '../../assets/products/souris-gaming-t-dagger-brigadier-t-tgm206-tunisie.jpg'
     
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
