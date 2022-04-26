import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {EmpList} from "../emplist";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  emp:EmpList = new EmpList();

  constructor(private empService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmp(){
    // @ts-ignore
    this.empService.createEmp(this.emp).subscribe((res:EmpList[]) => {

    })
  }

  goEmpList(){
    this.router.navigate(['/list'])
  }

  onSubmit(){

  }
}
