import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpListComponent} from "./emp-list/emp-list.component";
import {EmpAddComponent} from "./emp-add/emp-add.component";

const routes: Routes = [
  {path:'list', component:EmpListComponent},
  {path:'add', component:EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeRoutingModule { }
