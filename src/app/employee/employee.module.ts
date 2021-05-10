import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { FormsModule } from '@angular/forms';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';



@NgModule({
  declarations: [
    EmpDashboardComponent,
    EditPersonalComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class EmployeeModule { }
