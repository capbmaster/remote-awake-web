import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-calendar',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './select-calendar.component.html',
  styleUrl: './select-calendar.component.scss'
})
export class SelectCalendarComponent {
  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/dashboard']);
    } else if (index === 1) {
      this.router.navigate(['/configuracion']);
    }
  }

  onConectarOutlook() {
    // Maqueta: sin lógica
  }

  onConectarGmail() {
    // Maqueta: sin lógica
  }

  onConectarIcal() {
    // Maqueta: sin lógica
  }
}
