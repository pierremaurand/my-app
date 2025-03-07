import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  private router = inject(Router);

  onLogout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
