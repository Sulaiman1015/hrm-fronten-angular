import { Component, OnInit } from '@angular/core';
import { EmpList } from "../emplist";
import {EmployeeService} from "../employee.service";


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  /* FOR PAGE MODEL 1 */
  emplist: EmpList[] = [];

  constructor(private empService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmplist();
  }

  getEmplist(){
    this.empService.getEmpList().subscribe((res:EmpList[]) => {
      this.emplist = res;
    })
  }




  /* FOR PAGE MODEL 2 */
  /*i = 1;
  editId: number | undefined;
  emplist: EmpList[] = [];

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId ;
  }

  addRow(): void {

    // @ts-ignore
    this.emplist =
      [
      ...this.emplist
    ];
    this.i++;
  }

  deleteRow(id: number): void {
    // @ts-ignore
    this.emplist = this.emplist.filter(d => d.id !== id);
  }

  getEmplist(){
    this.empService.getEmpList().subscribe((res:EmpList[]) => {
      this.emplist = res;
    })
  }

  ngOnInit(): void {
    this.getEmplist();
    this.addRow();
    this.addRow();
  }*/



}
