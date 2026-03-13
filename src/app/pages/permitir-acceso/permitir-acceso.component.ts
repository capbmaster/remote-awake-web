import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permitir-acceso',
  standalone: true,
  imports: [MatTabsModule, MatCheckboxModule, MatIconModule, FormsModule],
  templateUrl: './permitir-acceso.component.html',
  styleUrl: './permitir-acceso.component.scss'
})
export class PermitirAccesoComponent {
  calendarioChecked = false;
  horaChecked = false;

  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/dashboard']);
    } else if (index === 1) {
      this.router.navigate(['/configuracion']);
    } else if (index === 2) {
      this.router.navigate(['/favoritos']);
    }
  }

  onDenegar() {
    this.router.navigate(['/select-calendar']);
  }

  onPermitir() {
    this.router.navigate(['/calendario']);
  }
}
