import { Component, input } from '@angular/core';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-employee-infos',
  standalone: true,
  imports: [],
  templateUrl: './employee-infos.component.html',
  styleUrl: './employee-infos.component.scss',
})
export class EmployeeInfosComponent {
  employee = input.required<Employee>();
}
