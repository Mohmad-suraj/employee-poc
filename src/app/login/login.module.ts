import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserloginComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class LoginModule { }
