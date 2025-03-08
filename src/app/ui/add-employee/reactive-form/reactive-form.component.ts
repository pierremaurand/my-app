import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../../core/models/employee.model';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);
  private es = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern(/^\d+$/),
      ],
    ],
    sexe: ['', [Validators.required]],
    address: this.fb.nonNullable.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: [''],
      country: ['', [Validators.required]],
    }),
    hobbies: this.fb.array([
      this.fb.nonNullable.control('', [Validators.required]),
    ]),
  });

  addHobbyForm(): void {
    const formControl = this.fb.nonNullable.control('');
    this.employeeForm.controls.hobbies.push(formControl);
  }

  removeHobbyForm(index: number): void {
    this.employeeForm.controls.hobbies.removeAt(index);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        ...this.employeeForm.getRawValue(),
      };
      this.es.addEmployee(employee);
      this.router.navigate(['/']);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

  //Getters
  get fullName() {
    return this.employeeForm.get('fullName');
  }

  get email() {
    return this.employeeForm.get('email');
  }
}
