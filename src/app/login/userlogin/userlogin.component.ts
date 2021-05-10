import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

 
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  public id:any;
  public email:any;
  public passwrd:any;
  constructor( private authservice: AuthserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }
 login(){
  if(this.authservice.login(this.id,this.email,this.passwrd)){
    console.log("you are a user")
    localStorage.setItem('tokenuser','allowed');
    this.router.navigate(['/userdash/'+`${this.id}`]);
  }
   else{
     console.log("you are not a user")
   }
 }
}
