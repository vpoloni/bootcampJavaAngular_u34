import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  pantalla = '';
  operacion = '';
  // variable que resetea el resultado en la pantalla después de clickar sobre un número
  resetear = false;
  arrayNumeros = [];
  numero = '';

  ngOnInit(): void {}

  limpiarPantalla() {
    this.pantalla = '';
    this.operacion = '';
    this.arrayNumeros = [];
    this.numero = '';
  }

  vaciarMemoria() {
    this.numero = '';
    this.operacion = '';
    this.arrayNumeros = [];
    this.resetear = true;
  }

  guardarNumero(numero: any) {
    if (this.resetear) {
      this.pantalla = '';
      this.resetear = false;
    }
    this.pantalla += numero;
    this.numero += numero;
  }

  guardarOperacion(operacion: any) {
    // guardamos el primer número en el array
    this.arrayNumeros.push(this.numero);

    // vaciamos la variable número para poder seguir guardando valores dentro al clickar sobre guardarNumero()
    this.numero = '';

    // guardamos la operacion
    this.operacion = operacion;

    // guardamos la operacion clickada en la pantalla
    this.pantalla += operacion;
  }

  obtenerRaizCuadrada() {
    let resultado = Math.sqrt(parseFloat(this.numero));
    this.pantalla = resultado.toString();

    this.vaciarMemoria();
  }

  obtenerModulo() {
    let resultado = parseFloat(this.numero) % 2;
    this.pantalla = resultado.toString();

    this.vaciarMemoria();
  }

  obtenerUnoEntreX() {
    let resultado = 1 / parseFloat(this.numero);
    this.pantalla = resultado.toString();

    this.vaciarMemoria();
  }

  cambiarSigno() {
    let signo = '-';
    this.numero = signo.concat(this.numero);
    this.pantalla = this.numero;
  }

  agregarPunto() {
    this.numero += '.';
    this.pantalla += '.';
  }

  calcularDosOperandos() {
    if (this.arrayNumeros.length != 1 && this.numero === '') {
      alert('Has de seleccionar los operandos a calcular');
    } else {
      let resultado = 0;
      switch (this.operacion) {
        case '+':
          resultado =
            parseFloat(this.arrayNumeros[0]) + parseFloat(this.numero);
          this.pantalla = resultado.toString();
          this.vaciarMemoria();
          break;

        case '-':
          resultado =
            parseFloat(this.arrayNumeros[0]) - parseFloat(this.numero);
          this.pantalla = resultado.toString();
          this.vaciarMemoria();
          break;

        case '*':
          resultado =
            parseFloat(this.arrayNumeros[0]) * parseFloat(this.numero);
          this.pantalla = resultado.toString();
          this.vaciarMemoria();
          break;

        case '/':
          if (this.numero == '0') {
            alert('No se puede dividir entre 0');
            this.vaciarMemoria();
          } else {
            resultado =
              parseFloat(this.arrayNumeros[0]) / parseFloat(this.numero);
            this.pantalla = resultado.toString();
            this.vaciarMemoria();
          }
          break;
      }
    }
  }
}
