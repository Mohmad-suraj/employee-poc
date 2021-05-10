import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmDashbaordComponent } from './admin/adm-dashbaord/adm-dashbaord.component';
import { EmpDashboardComponent } from './employee/emp-dashboard/emp-dashboard.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';

//import { AuthguardGuard } from './guard/authguard.guard';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import {AuthguardGuard}  from './guard/authguard.guard';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';
import { EditPersonalComponent } from './employee/edit-personal/edit-personal.component';
const routes: Routes = [
  {path:'login',component:LoginComponent
},
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'userlogin',component:UserloginComponent
},
{
  path:'adminlogin',component:AdminloginComponent
},
{
  path:'userdash/:id',component:EmpDashboardComponent,canActivate:[AuthguardGuard]
},
{
  path:'admindash',component:AdmDashbaordComponent,canActivate:[AuthguardGuard]
},
{
  path:'editemployee/:id',component:EditEmployeeComponent
},
{
  path:'editpersonal/:id',component:EditPersonalComponent
},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
