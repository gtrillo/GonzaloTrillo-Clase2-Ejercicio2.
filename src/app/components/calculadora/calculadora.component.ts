import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  public edadUno: number = 0;
  public edadDos: number = 0;
  public suma: number = 0;
  public promedio: number = 0;

  public calcular() {
    const edadUnoNumero = parseFloat(this.edadUno.toString());
    const edadDosNumero = parseFloat(this.edadDos.toString());

    if (!isNaN(edadUnoNumero) && !isNaN(edadDosNumero) && edadUnoNumero > 0 && edadDosNumero > 0) {
      this.suma = edadUnoNumero + edadDosNumero;
      this.promedio = this.suma / 2;
    } else {
      alert("Debe ingresar dos números válidos y mayores a 0");
    }
  }

  public limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
