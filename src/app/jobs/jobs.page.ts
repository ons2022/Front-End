import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  public job =[] ;
  offre: any;
  constructor(
    public httpClient: HttpClient,
    private data: DataService,
  ) { }

  ngOnInit() {
    this.getjobs();
  }
  getjobs(){
    this.httpClient.get("http://127.0.0.1:8000/getEmploi/")
    .subscribe(data => {
      console.log(data);
      this.offre=data;
      this.offre.forEach(job => {
        job .image=job .image.substring(2).slice(0, -1);;
      });

      
    }) 
    
    


  }

}
