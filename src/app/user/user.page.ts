import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public ListOfUser=[] ;
  
  user: Object;

  constructor(
    private data: DataService,
    public httpClient: HttpClient,
  ) { }

  ngOnInit() {
  
  this.httpClient.get("http://127.0.0.1:8000/getListOfUser/")
  .subscribe(data => {
    console.log(data);
    this.user=data;
  })}

}
