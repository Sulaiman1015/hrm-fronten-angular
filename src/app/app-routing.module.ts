import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./pages/welcome/welcome.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path:'employee',loadChildren:'./employee/employee.module#EmployeeModule'},
  { path:'',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path:'welcome',loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)}
  /*{ path: 'welcome', component:WelcomeComponent,
  children:[
    { path:'employee',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)}
  ]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
