import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MatTabsModule, FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  favoritos = [
    { id: 1, descripcion: 'Alarma principal', hour: '04', minute: '59', period: 'AM' },
    { id: 2, descripcion: 'Alarma normal', hour: '04', minute: '59', period: 'AM' }
  ];

  constructor(private router: Router) {}

  onTabChange(index: number) {
    if (index === 0) {
      this.router.navigate(['/dashboard']);
    } else if (index === 1) {
      this.router.navigate(['/configuracion']);
    }
  }

  togglePeriod(index: number) {
    this.favoritos[index].period =
      this.favoritos[index].period === 'AM' ? 'PM' : 'AM';
  }

  onEliminar(index: number) {
    // Maqueta: sin lógica
  }
}
