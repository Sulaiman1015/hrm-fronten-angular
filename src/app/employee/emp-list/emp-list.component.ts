import { Component, OnInit } from '@angular/core';
import { EmpList } from "../emplist";
import {EmployeeService} from "../employee.service";

/*class EmpList {
  id!: number;
  name!: string;
  sex!: string;
  age!: number;
  phone!: string;
  email!: string;
  address!:string;
  salary!: number;
  entry_date!:string
}*/

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  emplist: EmpList[] = [];

  constructor(private empService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmplist();
  }

  getEmplist(){
    // @ts-ignore
    this.empService.fetchData().subscribe((data:EmpList[]) => {
      this.emplist = data;
    })
  }



  /*i = 1;
  editId: number | undefined;
  emplist: EmpList[] = [];

  startEdit(id: number): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {

    // @ts-ignore
    this.emplist =
      [
      ...this.emplist
      /!*{
        id: `${this.i}`,
        name: `Edward King`,
        sex: `Male`,
        age: '32',
        phone: `012345`,
        email: `bz@benz.uk`,
        address: `London, Park Lane no.`,
        salary: `3255`,
        entry_date: `01/01/2020`,
      }*!/
    ];
    this.i++;
  }

  deleteRow(id: number): void {
    // @ts-ignore
    this.emplist = this.emplist.filter(d => d.id !== id);
  }

  getEmplist(){
    // @ts-ignore
    this.empService.fetchData().subscribe((data:EmpList[]) => {
      this.emplist = data;
    })
  }

  ngOnInit(): void {
    this.getEmplist();
    this.addRow();
    this.addRow();
  }*/



}
