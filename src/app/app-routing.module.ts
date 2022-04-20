import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginpageComponent} from "./loginpage/loginpage.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path:'home', component: HomepageComponent},
  { path:'login', component: LoginpageComponent},
  //{ path:'employee',loadChildren:'./employee/employee.module#EmployeeModule'},
  { path:'',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
  { path:'welcome',loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)}
  /*{ path: 'welcome', component:WelcomeComponent,
  /!*loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)*!/
  children:[
    { path:'employee',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)}
  ]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
