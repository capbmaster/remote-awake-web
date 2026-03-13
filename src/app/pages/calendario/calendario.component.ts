import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  imports: [MatTabsModule, MatCheckboxModule, MatButtonModule, FormsModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
  calendarios = [
    { id: 1, nombre: 'Calendario 1', seleccionado: false },
    { id: 2, nombre: 'Calendario 2', seleccionado: false },
    { id: 3, nombre: 'Calendario 3', seleccionado: false }
  ];
}
