import { Component, inject, input, OnInit } from '@angular/core';
import { NavigationBackToolbarComponent } from '../shared/navigation-back-toolbar/navigation-back-toolbar.component';
import { Employee } from '../../core/models/employee.model';
import { EmployeeService } from '../../core/services/employee.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EmployeeInfosComponent } from '../home/employee-infos/employee-infos.component';

@Component({
  selector: 'app-detail-employee',
  standalone: true,
  imports: [NavigationBackToolbarComponent, EmployeeInfosComponent],
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.scss',
})
export default class DetailEmployeeComponent implements OnInit {
  id = input<number>();
  employee!: Employee;
  private es = inject(EmployeeService);
  private router = inject(Router);
  private title = inject(Title);

  ngOnInit(): void {
    this.employee = this.es.getEmployee(this.id()!);
    if (this.employee) {
      this.title.setTitle(this.employee.fullName);
    } else {
      this.router.navigate(['/']);
    }
  }

  onEdit() {
    this.employee.id = this.id();
    this.router.navigate(['/add-employee'], {
      state: this.employee,
    });
  }

  onDelete() {
    this.es.deleteEmployee(this.id()!);
    this.router.navigate(['/']);
  }
}
