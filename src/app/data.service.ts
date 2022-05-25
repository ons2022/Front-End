import { Injectable } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { VoiturePage } from './voiture/voiture.page';
// Category 

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

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'automobile',
      image: '../../assets/categories/voi.jpg'
      
    }
    let cat2: ICategory = {
      id: 2,
      name: '',
      image: '../../assets/categories/stage.png',
      
    }
    let cat3: ICategory = {
      id: 3,
      name: '',
      image: '../../assets/categories/khedma .jpg'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png'
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
