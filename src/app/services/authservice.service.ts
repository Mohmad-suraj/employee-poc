import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }
  
  login(id,user,password){
    let j=JSON.parse(localStorage.getItem('information'));
  
     for(let i=0;i<j.length;i++){
       if(j[i].id1==id&&j[i].mail1==user&&j[i].passs1==password){
         
         return true;
       }
      
     }

   
  
  }
}

