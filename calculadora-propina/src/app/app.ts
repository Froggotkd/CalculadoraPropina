import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class App {
  monto: number = 0;
  porcentaje: number = 10;

  propina: number | null = null;
  total: number = 0;

  calcularPropina() {
    if (this.monto && this.porcentaje >= 0) {
      this.propina = this.monto * (this.porcentaje / 100);
      this.total = this.monto + this.propina;
    }
  }
}
