import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public id:any;
  public name:any;
  public dep:any;
  public mail:any;
  public pass:any;
  public info:any;
  public d:any;
 
 
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getRoutes();
    this.fetching();
  
  }

  getRoutes(){
    this.activatedRoute.params.subscribe((data)=>{this.info=data}
     );}

 
     fetching(){
      this.d=JSON.parse(localStorage.getItem('information'));
    
      console.log(this.d,this.info);
      for(let i=0;i<this.d.length;i++){
        if(this.d[i].id1==this.info.id){
          this.id=this.d[i].id1;
          this.name=this.d[i].name1;
          this.mail=this.d[i].mail1;
          this.dep=this.d[i].dep1;
          this.pass=this.d[i].passs1;
        }
      }
    }

    update(name2,id2,dep2,mail2,pass2){
      localStorage.removeItem('edit');
      console.log(this.info)
      

      for(let i=0;i<this.d.length;i++){
        if(this.d[i].id1==this.info.id){
          this.d[i].id1=id2;
          this.d[i].name1=name2;
          this.d[i].mail1=mail2;
          this.d[i].dep1=dep2;
          this.d[i].passs1=pass2;
        }
      }
     console.log(this.d)
  
     localStorage.setItem('information',JSON.stringify(this.d));
     this.router.navigateByUrl('admindash')
      
    }




}
