import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{
  constructor( private router:Router){

  }
  canActivate()
     { 
       if(localStorage.getItem('tokenadmin')){
       return true;
     }
     else if(localStorage.getItem('tokenuser')){
      return true;
     }

    {
      this.router.navigateByUrl('');
      return false;
    }
    
    
  }
  
    
    
  
  
}

