import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmDashbaordComponent } from './adm-dashbaord/adm-dashbaord.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AdmDashbaordComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class AdminModule { }
