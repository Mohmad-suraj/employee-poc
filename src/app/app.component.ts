import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  
  public name:string;
  public id:number;
  employlist=[];
 
 
  
  submit(em,emno){
 
  let payload={name:em.value,id:emno.value}
   this.employlist.push(payload);
   console.log(this.employlist);
   
  }
  removinguser(item){
    this.employlist.splice(item,1)
  }

  } 

