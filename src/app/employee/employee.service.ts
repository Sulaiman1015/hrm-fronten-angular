import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: any;

  constructor(private httpClient: HttpClient, private empService: EmployeeService) { }

  fetchData(){
    //return this.httpClient.get(`${(this.baseUrl)}/employees`)
  }

}
