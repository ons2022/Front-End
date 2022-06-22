import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  emailUser: any;
  firstNameUser : any;
  lastNameUser:any;
  passwordUser : any;
  dateOfBirth:any;
  addressUser:any;
  telUser:any;


  constructor(private util: UtilService,
    private navCtrl: NavController, 
    public httpClient: HttpClient,
    private storage: Storage,
    ) 
    { }

  ngOnInit() {
    this.storage.create();
    this.storage.get("token").then((val) => {
      console.log(val);
    })
  }
 
  getPassword(password){
    this.passwordUser=password;
  }
 
  getemailUser(emailUser){
    this.emailUser=emailUser;
  }
  getfirstNameUser(firstNameUser){
    this.firstNameUser=firstNameUser;
  }
  getlastNameUser(lastNameUser){
    this.lastNameUser=lastNameUser;
  }
  getdateOfBirth(dateOfBirth){
    this.dateOfBirth=dateOfBirth;
  }
  getaddressUser(addressUser){
    this.addressUser=addressUser;
  }
  gettelUser(telUser){
    this.telUser=telUser;
  }
  signup() {
    var data;
    // Enabling Side Menu ki tecliki alihom yatlaalek el menu 
    // this.util.setMenuState(true);
    // this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  

    // data= {
    //   "emailUser":    this.email,
    //   "passwordUser": this.password
    //   }

    let postData = {
      "emailUser": this.emailUser,
      "firstNameUser" : this.firstNameUser,
      "lastNameUser": this.lastNameUser,
      "telUser": this. telUser,
      "dateOfBirth": this.dateOfBirth,
      "passwordUser": this.passwordUser,
      "addressUser": this.addressUser,

    }
     console.log("data",postData)

 
    this.httpClient.post("http://127.0.0.1:8000/registerUser/", postData)
        .subscribe(data => {
          console.log(data);
           
         }) 
        
        

   // console.log("email ",this.emailUser,"pass ",this.passwordUser);
   




  }

}

function getData(arg0: string, getData: any) {
  throw new Error('Function not implemented.');
}

