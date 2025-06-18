import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('debería calcular la propina correctamente', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component.monto = 100;       // $100
    component.porcentaje = 15;   // 15%
    component.calcularPropina();

    expect(component.propina).toBe(15);      // Propina = $15
    expect(component.total).toBe(115);       // Total = $115
  });

  it('debería manejar propinas con 0 porciento', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component.monto = 50;
    component.porcentaje = 0;
    component.calcularPropina();

    expect(component.propina).toBe(0);       // $0 de propina
    expect(component.total).toBe(50);        // Total = $50
  });

  it('debería manejar valores decimales', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    component.monto = 75.50;
    component.porcentaje = 10;
    component.calcularPropina();

    expect(component.propina).toBeCloseTo(7.55);  // Propina ≈ $7.55
    expect(component.total).toBeCloseTo(83.05);   // Total ≈ $83.05
  });
});
