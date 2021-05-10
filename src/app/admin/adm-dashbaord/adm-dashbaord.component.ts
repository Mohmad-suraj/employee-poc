import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-dashbaord',
  templateUrl: './adm-dashbaord.component.html',
  styleUrls: ['./adm-dashbaord.component.css']
})
export class AdmDashbaordComponent implements OnInit {
 public id:any;
 public name:any;
 public dep:any;
 public mail:any;
 public pass:any;
 public j:any;
 public title="add";
 public details=[{name1:'raghu',id1:'2201',dep1:'IT',mail1:'ramu@gmail.com',passs1:'raghu@123'},
 {name1:'rahul',id1:'2202',dep1:'IT',mail1:'rahul@gmail.com',passs1:'rahul@123'},
 {name1:'suraj',id1:'2203',dep1:'IT',mail1:'suraj@gmail.com',passs1:'suraj@123'},
 {name1:'nidhi',id1:'2204',dep1:'IT',mail1:'nidhi@gmail.com',passs1:'nidhi@123'},
 {name1:'shivali',id1:'2205',dep1:'IT',mail1:'shivali@gmail.com',passs1:'shivali@123'}];
 
 public d:any;
  constructor(private router: Router) { }

  ngOnInit(): void { 
    if(!(localStorage.getItem('information'))){
      localStorage.setItem('information',JSON.stringify(this.details));
  
    }
    this.d=JSON.parse(localStorage.getItem('information'));
  }
 

 add(name,id,dep,mail,pass){
   let payload={name1:name,id1:id,dep1:dep,mail1:mail,passs1:pass};
   this.details.push(payload);
  // console.log(this.details);
   localStorage.setItem('information',JSON.stringify(this.details));
    this.d=JSON.parse(localStorage.getItem('information'));
    console.log(this.d)
    this.name='';
    this.id='';
    this.mail='';
    this.pass='';
    this.dep='';
  
 }
 delete(ind){
   this.details.splice(ind,1);
   localStorage.setItem('information',JSON.stringify(this.details));
   this.d=JSON.parse(localStorage.getItem('information'));
   console.log(this.d)
 }

 edit(id2){
  
  this.router.navigate(['/editemployee/'+`${id2}`])
 }
 editing(data){
  console.log(data);
  
  this.router.navigate(['/editemployee/'+`${data.id1}`])
 }
}
