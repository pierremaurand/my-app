import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, EmployeeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
