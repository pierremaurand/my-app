import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  addEmployee = (employee: Employee) => this.employees.push(employee);
  getEmployees = () => this.employees;
  getEmployee = (index: number) => this.employees[index];
  editEmployee = (i: number, e: Employee) => (this.employees[i] = e);
  deleteEmployee = (i: number) => this.employees.slice(i, 1);
}
