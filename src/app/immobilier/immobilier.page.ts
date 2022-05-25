import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.page.html',
  styleUrls: ['./immobilier.page.scss'],
})
export class ImmobilierPage implements OnInit {
  public immobilier =[] ;
  immob: any;
  constructor(
    public httpClient: HttpClient,
    private data: DataService,
 
    
  ) { }

  ngOnInit() {
    this.getimmobiliers();

  }

  getimmobiliers(){
  this.httpClient.get("http://127.0.0.1:8000/getImmobilier/")
    .subscribe(data => {
      console.log(data);
      this.immob=data;

      
    })   }  
  


}
