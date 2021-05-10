import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authservice:AuthserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  user(){
    console.log("you are here");
    this.router.navigateByUrl('userlogin');
  }
 
 admin(){
   console.log("you are at admin page");
   this.router.navigateByUrl('adminlogin')
 }
 
}
