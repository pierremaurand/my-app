import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  private router = inject(Router);

  onLoggin(): void {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/']);
  }
}
