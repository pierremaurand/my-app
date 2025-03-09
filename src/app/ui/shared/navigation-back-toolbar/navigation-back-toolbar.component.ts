import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-back-toolbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-back-toolbar.component.html',
  styleUrl: './navigation-back-toolbar.component.scss',
})
export class NavigationBackToolbarComponent {
  toolbarTitle = input.required<string>();
}
