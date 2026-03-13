import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/dashboard']);
    }
  }
}
