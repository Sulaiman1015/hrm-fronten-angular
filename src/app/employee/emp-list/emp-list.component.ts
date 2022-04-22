import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";

class EmplData {
  id!: string;
  name!: string;
  sex!: string;
  age!: string;
  phone!: string;
  email!: string;
  address!:string;
  salary!: string;
  entry_date!: string;
}

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  //employees: Employee[];
  /*employees = [
    {
      ID: '1',
      Name: 'Benz',
      Sex: 'Female',
      Age: '25',
      Phone: '06552287',
      Email: 'bz@benz.com',
      Address: 'Berlin Germany',
      Entry_Date: '17/02/2019',
      Salary: '3156'
    },
    {
      ID: '2',
      Name: 'BMW',
      Sex: 'Male',
      Age: '35',
      Phone: '07442437',
      Email: 'bmw@bmw.com',
      Address: 'Frankfurt Germany',
      Entry_Date: '22/11/2009',
      Salary: '5648'
    },
    {
      ID: '3',
      Name: 'Audi',
      Sex: 'Female',
      Age: '29',
      Phone: '06552287',
      Email: 'audi@audi.com',
      Address: 'Munich Germany',
      Entry_Date: '27/12/2013',
      Salary: '4315'
    }
  ]*/

  i = 1;
  editId: string | null = null;
  listOfData: EmplData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {

    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King`,
        sex: `Male`,
        age: '32',
        phone: `012345`,
        email: `bz@benz.uk`,
        address: `London, Park Lane no.`,
        salary: `3255`,
        entry_date: `01/01/2020`,
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    // @ts-ignore
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.addRow();
    this.addRow();
  }
}
