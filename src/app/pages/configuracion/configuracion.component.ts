import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  periods = [
    { startPeriod: 'AM', endPeriod: 'AM' },
    { startPeriod: 'AM', endPeriod: 'AM' },
    { startPeriod: 'AM', endPeriod: 'AM' }
  ];

  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/dashboard']);
    } else if (index === 2) {
      // Navegación a favoritos cuando esté implementado
    }
  }

  togglePeriod(rowIndex: number, isStart: boolean) {
    if (isStart) {
      this.periods[rowIndex].startPeriod = this.periods[rowIndex].startPeriod === 'AM' ? 'PM' : 'AM';
    } else {
      this.periods[rowIndex].endPeriod = this.periods[rowIndex].endPeriod === 'AM' ? 'PM' : 'AM';
    }
  }
}
