import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, MatCheckboxModule, MatButtonModule, MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 1) {
      this.router.navigate(['/configuracion']);
    } else if (index === 2) {
      this.router.navigate(['/favoritos']);
    }
  }

  onVincularCalendario() {
    this.router.navigate(['/calendario']);
  }
}
