import { Employee } from './../../../core/models/employee.model';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
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
        Validators.pattern(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        ),
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
      if (history.state.id) {
        this.es.editEmployee(history.state.id, employee);
      } else {
        this.es.addEmployee(employee);
      }
      this.router.navigate(['/']);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    if (history.state.fullName) {
      const employee = history.state as Employee;
      this.employeeForm.patchValue(employee);
      this.removeHobbyForm(0);
      employee.hobbies.forEach((hobby) => {
        const formControl = this.fb.nonNullable.control(hobby);
        this.employeeForm.controls.hobbies.push(formControl);
      });
    }
  }

  //Getters
  get fullName() {
    return this.employeeForm.get('fullName');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  get sexe() {
    return this.employeeForm.get('sexe');
  }

  get street() {
    return this.employeeForm.get('address')?.get('street');
  }

  get city() {
    return this.employeeForm.get('address')?.get('city');
  }

  get state() {
    return this.employeeForm.get('address')?.get('state');
  }

  get country() {
    return this.employeeForm.get('address')?.get('country');
  }
}
