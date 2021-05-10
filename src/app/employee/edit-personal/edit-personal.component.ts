import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-personal',
  templateUrl: './edit-personal.component.html',
  styleUrls: ['./edit-personal.component.css']
})
export class EditPersonalComponent implements OnInit {
 public info:any;
 public name:any;
 public id:any;
 public dep:any;
 public d:any;
  constructor(private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getroutes();
    this.fetching();
  }
 getroutes(){
   this.activatedroute.params.subscribe((data)=>{this.info=data});
 }
 fetching(){
  this.d=JSON.parse(localStorage.getItem('information'));

  console.log(this.d,this.info);
  for(let i=0;i<this.d.length;i++){
    if(this.d[i].id1==this.info.id){
      this.id=this.d[i].id1;
      this.name=this.d[i].name1;
      this.dep=this.d[i].dep1;
     
    }
  }
}

 update(name,id,depart){
   localStorage.removeItem('edit');
  for(let i=0;i<this.d.length;i++){
    if(this.d[i].id1==this.info.id){
      this.d[i].id1=id;
      this.d[i].name1=name;
      this.d[i].dep1=depart;
    }
  }
 console.log(this.d)

 localStorage.setItem('information',JSON.stringify(this.d));
 this.router.navigate(['/userdash/'+`${this.id}`]);
  
 }
}
