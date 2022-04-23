import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmpAddComponent,
    EmpListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NzDividerModule,
    NzTableModule,
    NzInputModule,
    NzPopconfirmModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }
