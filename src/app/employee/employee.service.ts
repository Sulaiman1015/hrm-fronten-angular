import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { EmpList } from "./emplist";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8081/api/v1/emplist";

  constructor(private httpClient: HttpClient) { }

  getEmpList():Observable<EmpList[]>{
    return this.httpClient.get<EmpList[]>(`${this.baseUrl}`)
  }

  createEmp(emp:EmpList):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,emp)
  }
}
