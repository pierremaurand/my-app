import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {}
