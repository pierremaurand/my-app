import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  addEmployee = (employee: Employee) => this.employees.push(employee);
  getEmployees = () => this.employees;
}
