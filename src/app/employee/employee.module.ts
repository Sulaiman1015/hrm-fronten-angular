import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpListComponent } from './emp-list/emp-list.component';


@NgModule({
  declarations: [
    EmpAddComponent,
    EmpListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
