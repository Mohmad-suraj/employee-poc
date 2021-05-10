import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
 public email:any;
 public passwrd:any;
  constructor( private authservice:AuthserviceService, private router:Router) { }

  ngOnInit(): void {
  }
 login(mail,pass){
   if(mail=="admin" && pass=="admin"){
     localStorage.setItem('tokenadmin','allowed');
     this.router.navigateByUrl('admindash')
   }
 }
}
