import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private fb = inject(FormBuilder);

  employeeForm = this.fb.group({
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
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: [''],
      country: ['', [Validators.required]],
    }),
    hobbies: this.fb.array([this.fb.control('', [Validators.required])]),
  });

  addHobbyForm(): void {
    const formControl = this.fb.control('');
    this.employeeForm.controls.hobbies.push(formControl);
  }

  removeHobbyForm(index: number): void {
    this.employeeForm.controls.hobbies.removeAt(index);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('La valeur du formularie est: ', this.employeeForm.value);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
