# Calculadora Propina

Desarrollado por: Daniel Jaramillo y Nayeli Leiva en Angular (typescript).

## Funcionalidad
El usuario ingresa el total de la cuenta (flotante) y el porcentaje de propina que desea entregar (entero).
El sistema calcula y muestra en pantall la propina y la suma al total de la cuenta.

## Código limpio en TS aplicados

### Utiliza nombres significativos y pronunciables para las variables
``` html
  <button (click)="calcularPropina()">Calcular</button>
```

### Utiliza variables explicativas y buscables
``` typescript
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
```

### Evita el mapeo mental
``` html
    <label>Porcentaje de propina (%):</label>
    <input type="number" [(ngModel)]="porcentaje" class="form-control" placeholder="15" min="0" max="100" />
```

### No incluyas contexto innecesario
``` html
      <p><span class="emoji">💰</span> Propina: ${{ propina?.toFixed(2) || '0.00' }}</p>
```

### Utiliza argumentos predefinidos en vez de utilizar condicionales
``` typescript
  monto: number = 0;
  porcentaje: number = 10;

  propina: number | null = null;
  total: number = 0;
```

### Un solo concepto para cada prueba
``` typescript
  it('debería manejar propinas con 0 porciento', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component.monto = 50;
    component.porcentaje = 0;
    component.calcularPropina();

    expect(component.propina).toBe(0);       // $0 de propina
    expect(component.total).toBe(50);        // Total = $50
  });
```