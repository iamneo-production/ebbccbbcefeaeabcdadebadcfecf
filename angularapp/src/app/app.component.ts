import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  country:any[]=['India','US','Canada','Pakistan','China','Japan','Australia']
  topicHasError=true;
  validateTopic(value:any){
    if (value=='default') this.topicHasError=true;
    else{
      this.topicHasError=false;
    }
  }
  userModel=new User('','male','default','','')
  agecheck=false;
  
  checkage(value:string){
    if (value=='India'){
      this.agecheck=true;
    }
    else if (value=='US'){
      this.agecheck=true;
    }
    else if (value=='Canada'){
      this.agecheck=true;
    }
    else{
      this.agecheck=false;
    }
  }
  namecheck:boolean=true;
  firstname:string='john';
  checkname(value:string){
    if (/^[a-zA-Z]{3,50}$/.test(value)){
      this.namecheck=true;
    }
    else{
      this.namecheck=false;
    }
  }
  submit(){

  }

}
export class User {
  constructor(
      public name:string,
      public gender:string,
      public country:string,
      public city:string,
      public age:string
  ){}
}
