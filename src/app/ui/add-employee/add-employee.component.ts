import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [RouterLink, ReactiveFormComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
})
export default class AddEmployeeComponent {}
