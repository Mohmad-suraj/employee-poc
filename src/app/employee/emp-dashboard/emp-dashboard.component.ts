import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  public d:any;
  public id:any;
  public name:any;
  public mail:any;
  public info:any;
  ngOnInit() {
    this.getRoutes();
    this.getting();
  }
  getRoutes(){
   this.activatedRoute.params.subscribe((data)=>{this.info=data}
    );
    
  }
getting(){
  this.d=JSON.parse(localStorage.getItem('information'));

  console.log(this.d,this.info);
  for(let i=0;i<this.d.length;i++){
    if(this.d[i].id1==this.info.id){
      this.id=this.d[i].id1;
      this.name=this.d[i].name1;
      this.mail=this.d[i].mail1;
    }
  }
}
  
edit(id){
  localStorage.setItem('edit','allowed');
  this.router.navigate(['/editpersonal/'+`${id}`]);
}
exit(){
  localStorage.setItem('edit','allowed');
  this.router.navigateByUrl('userlogin');

}
}
