import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../../core/services/employee.service';
import { EmployeeInfosComponent } from '../employee-infos/employee-infos.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, EmployeeInfosComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  private es = inject(EmployeeService);
  employees = this.es.getEmployees();
}
