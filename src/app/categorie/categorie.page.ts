import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // getUsers(){
  //   this.httpClient.get("http://127.0.0.1:8000/getListOfUser/")
  //   .subscribe(data => {
  //     console.log(data);
  //     this.user=data;
  //   })
  // }

}
